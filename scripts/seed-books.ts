import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { books } from '../src/pkg/integrations/supabase/schemas'

// Database connection
const connectionString = process.env.DATABASE_URL!
const client = postgres(connectionString)
const db = drizzle(client)

// Sample books data
const sampleBooks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    description: 'A classic American novel about the Jazz Age and the American Dream.'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publishedYear: 1960,
    description: 'A gripping tale of racial injustice and childhood innocence in the American South.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    publishedYear: 1949,
    description: 'A dystopian social science fiction novel about totalitarian control.'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publishedYear: 1813,
    description: 'A romantic novel of manners written by Jane Austen.'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publishedYear: 1951,
    description: 'A coming-of-age story about teenage rebellion and alienation.'
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding',
    publishedYear: 1954,
    description: 'A novel about British boys stranded on an uninhabited island.'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    publishedYear: 1937,
    description: 'A fantasy novel about a hobbit who goes on an unexpected journey.'
  },
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    publishedYear: 1997,
    description: 'The first book in the Harry Potter series about a young wizard.'
  }
]

async function seedBooks() {
  try {
    console.log('🌱 Seeding books...')
    
    // Insert books
    for (const book of sampleBooks) {
      await db.insert(books).values(book)
      console.log(`✅ Added: ${book.title} by ${book.author}`)
    }
    
    console.log('🎉 Successfully seeded books!')
  } catch (error) {
    console.error('❌ Error seeding books:', error)
  } finally {
    await client.end()
  }
}

seedBooks()
