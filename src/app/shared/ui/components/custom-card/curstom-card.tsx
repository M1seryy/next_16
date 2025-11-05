import { type FC } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/shared/ui'
import { cn } from '@/app/shared/lib/utils'
import { Link } from '@/pkg/libraries/locale/navigation'
import { FavoriteToggle } from '@/app/shared/ui/components/favourite-toggle/favourite-toggle'

// interface
interface IProps {
  className?: string
  title: string
  author: string
  publishedYear: number | string
  description?: string
  href?: string
  isFavorite?: boolean
  onToggle?: () => void
  loading?: boolean
}

// component
const CustomCardComponent: FC<Readonly<IProps>> = (props) => {
  const { title, author, publishedYear, description, href, isFavorite = false, onToggle, loading = false } = props

  // return
  return (
    <Card className='hover:bg-accent relative cursor-pointer transition-colors'>
      <CardHeader className='flex items-start justify-between'>
        <Link href={href ?? '/'} prefetch className={cn('group block')}>
          <div>
            <CardTitle className='text-lg'>{title}</CardTitle>
            <CardDescription>by {author}</CardDescription>
          </div>
        </Link>

        <FavoriteToggle
          className='absolute top-3 right-3'
          isActive={isFavorite}
          loading={loading}
          onToggle={onToggle}
        />
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground text-sm'>Published: {publishedYear}</p>
        {description && <p className='text-muted-foreground mt-2 text-sm'>{description}</p>}
      </CardContent>
    </Card>
  )
}

export default CustomCardComponent
