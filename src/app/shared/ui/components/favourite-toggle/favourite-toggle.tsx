'use client'

import { type FC, type MouseEvent } from 'react'
import { Heart } from 'lucide-react'

import { Button } from '@/app/shared/ui'
import { cn } from '@/app/shared/lib/utils'

// interface
interface IProps {
  isActive?: boolean
  count?: number
  loading?: boolean
  onToggle?: () => void
  className?: string
}

export const FavoriteToggle: FC<Readonly<IProps>> = (props) => {
  const { isActive = false, count, loading = false, onToggle, className } = props

  // return
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button
        type='button'
        variant='ghost'
        size='icon'
        aria-pressed={isActive}
        aria-label={isActive ? 'Remove from favorites' : 'Add to favorites'}
        disabled={loading}
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation()
          onToggle?.()
        }}
        className={cn(
          'transition-colors',
          isActive ? 'text-red-500 hover:text-red-600' : 'text-muted-foreground hover:text-foreground',
        )}
        title={isActive ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart className={cn('h-5 w-5', isActive && 'fill-red-500')} />
      </Button>

      {typeof count === 'number' && <span className='text-muted-foreground text-sm'>{count}</span>}
    </div>
  )
}

export default FavoriteToggle
