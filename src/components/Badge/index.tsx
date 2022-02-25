import React from 'react'

export type BadgeColor = 'default' | 'blue' | 'pink' | 'gradient'
export type BadgeSize = 'default' | 'medium' | 'large'

export interface BadgeProps {
  children?: React.ReactChild | React.ReactChild[]
  color?: BadgeColor
  size?: BadgeSize
}

export const COLOR = {
  default: '',
  blue: 'bg-red bg-opacity-20 outline-blue rounded text-xs text-yellow px-2 py-1',
  pink: 'bg-red bg-opacity-20 outline-red rounded text-xs text-red px-2 py-1',
  gradient:
    'bg-gradient-to-r from-red to-yellow opacity-80 hover:opacity-100 bg-pink bg-opacity-20 outline-red rounded text-base text-white px-2 py-1',
}

export const SIZE = {
  default: 'text-xs',
  medium: 'text-sm',
  large: 'text-lg',
}

function Badge({
  color = 'default',
  size = 'default',
  children,
  className = '',
}: BadgeProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={`${COLOR[color]} ${SIZE[size]} ${className}`}>{children}</div>
}

export default Badge
