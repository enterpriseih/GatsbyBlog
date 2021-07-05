/* global graphql */

import React from 'react';
import PropTypes from 'prop-types';

import Posts from '../components/Posts';
import Pagination from '../components/TagsPagination';
import Separator from '../components/Separator';
import MetaTags from '../components/MetaTags';

export default function Tags({ pathContext, data }) {
  const { siteUrl } = data.site.siteMetadata;
  const { posts, tag, pagesSum, page, length } = pathContext;

  return (
    <section className='main-content'>
      <MetaTags
        title={`Tag ${tag}`}
        description={`All posts talking about ${tag}`}
        tags={tag}
        siteUrl={siteUrl}
        path={`/tag/${tag}`}
        noIndex={false}
      />
      <section className='blog container tags-collection'>
        <div className='medium-8 medium-offset-2 large-10 large-offset-1'>
          <header className='header'>
            <h1 className='tag-title tag-page-title'>{tag}</h1>
          </header>
          <section className='tag-meta'>共 {length} 篇文章</section>

          <div className='posts'>
            <Pagination page={page} pagesSum={pagesSum} tag={tag} />
            <Separator />
            <Posts posts={posts} />
            <Separator />
            <Pagination page={page} pagesSum={pagesSum} tag={tag} />
          </div>
        </div>
      </section>
    </section>
  );
}

Tags.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object
};

export const tagsQuery = graphql`
  query TagsSiteMetadata {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
