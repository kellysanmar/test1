/* Content for the Blog / Desktop frame (Figma: Patterns / Blog, node 2005:3299). */

export type Category = 'Design' | 'Engineering' | 'Tokens' | 'Accessibility';

export type Post = {
  id: string;
  /** The featured post can carry a label outside the tab categories. */
  category: Category | 'Dogs';
  title: string;
  excerpt: string;
  author: string;
  initials: string;
  date: string;
  readTime: string;
  image?: { src: string; alt: string };
};

export const categories: Category[] = ['Design', 'Engineering', 'Tokens', 'Accessibility'];

export const featured: Post = {
  id: 'code-first',
  category: 'Dogs',
  title: 'Code first, Figma second: how our library stays in sync',
  excerpt:
    'Every variable, text style and component in our Figma file is generated from the code. Here is the pipeline, the checks that catch drift, and the three things we got wrong on the way.',
  author: 'Kelly Campbell',
  initials: 'KC',
  date: '14 Sep 2026',
  readTime: '9 min read',
  image: {
    src: '/blog/featured.jpg',
    alt: 'A small terrier in an orange coat, sitting on a fluffy blanket on a sofa',
  },
};

export const posts: Post[] = [
  {
    id: 'colour-tokens',
    category: 'Tokens',
    title: 'How we name colour tokens by role',
    excerpt:
      'Why background, content and border beat a palette of hues, and what changed when we switched.',
    author: 'Christine Vall',
    initials: 'CV',
    date: '12 Sep 2026',
    readTime: '6 min read',
  },
  {
    id: 'wrapping-base-ui',
    category: 'Accessibility',
    title: 'Wrapping Base UI instead of rebuilding it',
    excerpt:
      'Focus handling and ARIA are hard to get right. We keep Base UI’s behaviour and only own the styles.',
    author: 'Marta Okafor',
    initials: 'MO',
    date: '5 Sep 2026',
    readTime: '7 min read',
  },
  {
    id: 'default-variant',
    category: 'Design',
    title: 'One Default variant, then one per state',
    excerpt:
      'A simple rule for variant sets that keeps Figma properties identical to the component’s props.',
    author: 'Jonas Lind',
    initials: 'JL',
    date: '29 Aug 2026',
    readTime: '5 min read',
  },
  {
    id: 'npm-run-validate',
    category: 'Engineering',
    title: 'Catching drift with npm run validate',
    excerpt:
      'The check that compares this Figma file with the code, and fails the build when a name or value slips.',
    author: 'Christine Vall',
    initials: 'CV',
    date: '21 Aug 2026',
    readTime: '8 min read',
  },
  {
    id: 'two-tiers',
    category: 'Tokens',
    title: 'Two tiers are enough',
    excerpt:
      'Definitions and usage. Why we stopped at two token tiers and haven’t needed a third.',
    author: 'Arun Patel',
    initials: 'AP',
    date: '14 Aug 2026',
    readTime: '4 min read',
  },
  {
    id: 'dark-mode',
    category: 'Design',
    title: 'Dark mode as a variable mode',
    excerpt:
      'Set a frame to Dark and every colour follows. What that took, and the roles we had to rename.',
    author: 'Marta Okafor',
    initials: 'MO',
    date: '7 Aug 2026',
    readTime: '6 min read',
  },
];
