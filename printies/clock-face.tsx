import * as React from 'react';

const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export interface ClockFaceProps {
    radius: number;
}

export class ClockFace extends React.Component<ClockFaceProps> {
    render() {
        const { radius } = this.props;
        const digitSize = radius * 0.25;
        const innerRadius = radius - digitSize + digitSize * 0.2;
        const xxx = 1.0;
        return <>
            {hours.map((hour, index) => {
                const alpha1 = -90 + index * 360 / hours.length;
                const alpha = alpha1 / 180 * Math.PI;
                const x = radius * xxx * Math.cos(alpha);
                const y = radius * xxx * Math.sin(alpha);
                const textX = innerRadius * Math.cos(alpha);
                const textY = innerRadius * Math.sin(alpha) + digitSize / 2.8;
                return <React.Fragment key={hour}>
                    <circle cx={x} cy={y} r={2} />
                    <text x={textX} y={textY} fontSize={digitSize + 'px'} textAnchor="middle">{hour}</text>
                </React.Fragment>;
            })}
            <circle r={radius} className="clock-circle" />
            <circle r={2} className="clock-middle-dot" />
        </>;
    }
}