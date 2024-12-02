import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';

 
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delioous meals,created <span>by you</span>
        </h1>
        <Link href="/meals/share">
         Share Your Favorite Recipe
        </Link>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]}/>
      </main>
    </>
  );
}