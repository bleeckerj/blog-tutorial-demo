import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Near Future Laboratory | The Back Office',
    description: 'Near Future Laboratory. Our thesis is this: Imagination leads to unexpected greatness and beautiful worlds. We help you and your organization Imagine Harder.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  })
}