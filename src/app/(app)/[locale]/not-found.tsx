import { type FC } from 'react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { Button } from '@/app/shared/ui/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/shared/ui/ui/card'

// interface
interface IProps {
  // no props needed
}

// component
const NotFoundPage: FC<Readonly<IProps>> = async () => {
  const t = await getTranslations()

  // return
  return (
    <div className='bg-background flex min-h-screen items-center justify-center p-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='text-center'>
          <CardTitle className='text-destructive text-6xl font-bold'>404</CardTitle>
          <CardDescription className='text-lg'>{t('NotFound.title')}</CardDescription>
        </CardHeader>

        <CardContent className='space-y-4 text-center'>
          <p className='text-muted-foreground'>{t('NotFound.description')}</p>

          <div className='flex flex-col gap-2'>
            <Button asChild className='w-full'>
              <Link href='/'>{t('NotFound.goHome')}</Link>
            </Button>

            <Button asChild className='w-full'>
              <Link href='/'>{t('NotFound.goBack')}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default NotFoundPage
