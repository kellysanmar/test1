import { Field } from '@base-ui/react/field';
import { useState, type FormEvent } from 'react';

import { Alert } from '../components/Alert';
import { Avatar } from '../components/Avatar';
import { Badge } from '../components/Badge';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Checkbox } from '../components/Checkbox';
import { NavigationMenu } from '../components/NavigationMenu';
import { Separator } from '../components/Separator';
import { Tabs } from '../components/Tabs';
import { TextField } from '../components/TextField';
import { categories, featured, posts, type Post } from './posts';
import styles from './BlogPage.module.css';

const siteLinks = ['Docs', 'Components', 'Blog', 'Changelog'];

/** Built from Figma: Patterns / Blog → Blog / Desktop (node 2005:3299). */
export function BlogPage() {
  const [tab, setTab] = useState<string>('all');
  const [subscribed, setSubscribed] = useState(false);

  const visible = tab === 'all' ? posts : posts.filter((post) => post.category === tab);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <a href="/" className={styles.brand}>
          <img src="/blog/dot.svg" width="12" height="12" alt="" />
          Sample Design System
        </a>
        <NavigationMenu.Root aria-label="Main" className={styles.navMenu}>
          <NavigationMenu.List>
            {siteLinks.map((label) => (
              <NavigationMenu.Item key={label}>
                <NavigationMenu.Link href="#" active={label === 'Blog'}>
                  {label}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <Button size="sm" className={styles.navAction}>
          Subscribe
        </Button>
      </header>

      <main>
        <div className={styles.header}>
          <Breadcrumb.Root>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Current>Blog</Breadcrumb.Current>
            </Breadcrumb.Item>
          </Breadcrumb.Root>
          <h1 className={styles.title}>The Sample Design System blog</h1>
          <p className={styles.lede}>
            Notes on tokens, components and keeping Figma and code in step. Written by the people
            who build the system.
          </p>
        </div>

        <div className={styles.content}>
          <Tabs.Root value={tab} onValueChange={(value) => setTab(String(value))}>
            <Tabs.List aria-label="Filter posts by topic" className={styles.tabList}>
              <Tabs.Tab value="all">All posts</Tabs.Tab>
              {categories.map((category) => (
                <Tabs.Tab key={category} value={category}>
                  {category}
                </Tabs.Tab>
              ))}
              <Tabs.Indicator />
            </Tabs.List>
          </Tabs.Root>

          <Card.Root className={styles.featured}>
            <div className={styles.featuredImage}>
              {featured.image ? (
                <img src={featured.image.src} alt={featured.image.alt} />
              ) : (
                'Image 3:2'
              )}
            </div>
            <div className={styles.featuredBody}>
              <Badge variant="accent">Featured · {featured.category}</Badge>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <div className={styles.featuredMeta}>
                <Avatar fallback={featured.initials} />
                <div>
                  <p className={styles.author}>{featured.author}</p>
                  <p className={styles.caption}>
                    {featured.date} · {featured.readTime}
                  </p>
                </div>
              </div>
              <Button variant="secondary">Read article</Button>
            </div>
          </Card.Root>

          <section className={styles.latest} aria-labelledby="latest-posts">
            <h2 id="latest-posts" className={styles.sectionTitle}>
              Latest posts
            </h2>
            <div className={styles.grid}>
              {visible.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className={styles.loadMore}>
              <Button variant="secondary">Load more posts</Button>
            </div>
          </section>

          <section className={styles.newsletter} aria-labelledby="newsletter-title">
            <div className={styles.newsletterCopy}>
              <p className={styles.overline}>Newsletter</p>
              <h2 id="newsletter-title" className={styles.newsletterTitle}>
                Get new posts in your inbox
              </h2>
              <p className={styles.newsletterText}>
                One email when a post goes live, plus a short monthly round-up of what changed in
                the system. No spam, and you can unsubscribe any time.
              </p>
            </div>
            <div className={styles.form}>
              {subscribed ? (
                <Alert variant="success" title="You’re subscribed">
                  Check your inbox to confirm your email address.
                </Alert>
              ) : (
                <form onSubmit={handleSubscribe} className={styles.formInner}>
                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <TextField
                        label="Email address"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <Button type="submit">Subscribe</Button>
                  </div>
                  {/* GAP: Checkbox uses Field.Item, which throws outside a Field.Root. */}
                  <Field.Root name="changelog">
                    <Checkbox label="Also send me the monthly changelog" />
                  </Field.Root>
                  <p className={styles.caption}>
                    We only use your email for this newsletter. Read our privacy policy.
                  </p>
                </form>
              )}
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <Separator />
        <div className={styles.footerRow}>
          <span className={styles.brandText}>Sample Design System</span>
          <NavigationMenu.Root aria-label="Footer" className={styles.footerLinks}>
            <NavigationMenu.List>
              {[...siteLinks, 'GitHub'].map((label) => (
                <NavigationMenu.Item key={label}>
                  <NavigationMenu.Link href="#">{label}</NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>
          <p className={styles.caption}>© 2026 Sample Design System. Built with Base UI.</p>
        </div>
      </footer>
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Card.Root>
      <div className={styles.cardImage}>Image 16:9</div>
      <div className={styles.cardBody}>
        <Badge variant="accent" size="sm">
          {post.category}
        </Badge>
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>{post.excerpt}</Card.Description>
        <div className={styles.cardMeta}>
          <Avatar size="sm" fallback={post.initials} />
          <span className={styles.caption}>
            {post.author} · {post.date} · {post.readTime}
          </span>
        </div>
      </div>
    </Card.Root>
  );
}
