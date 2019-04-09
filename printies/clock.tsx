import * as React from 'react';
import { thusClockArrows } from './clock-arrows';
import { thusClockFace } from './clock-face';
import { HourAt, Minute } from './hours-minutes';

export interface ClockProps {
    shortAt: HourAt | null;
    longAt: Minute | null;
    areHoursSticky: boolean;
}

export function thusClock(radius: number, shortVsRadi: number, longVsRadi: number, dotRadius: number) {
    const ClockFace = thusClockFace(radius, dotRadius);
    const ClockArrows = thusClockArrows(radius, shortVsRadi, longVsRadi);
    return class Clock extends React.Component<ClockProps> {
        render() {
            const { shortAt, longAt, areHoursSticky } = this.props;
            const half = radius + dotRadius;
            const size = half * 2;
            return <svg width={size} height={size}>
                <g transform={`translate (${half}, ${half})`}>
                    <ClockFace />
                    <ClockArrows areHoursSticky={areHoursSticky} shortAt={shortAt} longAt={longAt} />
                </g>
            </svg>;
        }
    }
}
