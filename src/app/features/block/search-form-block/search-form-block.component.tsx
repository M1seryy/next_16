'use client'

import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'

import { useRouter } from '@/pkg/libraries/locale/navigation'
import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input } from '@/app/shared/ui'

// interface
interface IProps {
  initialValue?: string
}

interface SearchFormData {
  query: string
}

// component
const SearchFormBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { initialValue = '' } = props

  const router = useRouter()
  const searchParams = useSearchParams()
  const t = useTranslations()

  const form = useForm<SearchFormData>({
    defaultValues: {
      query: initialValue,
    },
  })

  const onSubmit = (data: SearchFormData) => {
    const params = new URLSearchParams(searchParams.toString())

    if (data.query.trim()) {
      params.set('search', data.query.trim())
    } else {
      params.delete('search')
    }

    const queryString = params.toString()
    const newPath = queryString ? `/?${queryString}` : '/'
    router.push(newPath)
  }

  // return
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-md'>
        <div className='flex gap-2'>
          <FormField
            control={form.control}
            name='query'
            rules={{
              maxLength: { value: 100, message: 'Query too long' },
            }}
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input {...field} placeholder={t('Search.placeholder')} className='w-full' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' disabled={form.formState.isSubmitting} className='shrink-0'>
            {form.formState.isSubmitting ? t('Search.searching') : t('Search.button')}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default SearchFormBlockComponent
