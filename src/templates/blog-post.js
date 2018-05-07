/* global graphql */

import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import { ShareButtons } from 'react-share';
import ReactDisqusThread from 'react-disqus-thread';
import uuidv5 from 'uuid/v5';
import Img from 'gatsby-image';

import Menu from '../components/Menu';
import BulletListTags from '../components/BulletListTags';
import NavigateLink from '../components/NavigateLink';
import Separator from '../components/Separator';
import MetaTags from '../components/MetaTags';

import ArticleSchema from '../components/schemas/ArticleSchema';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  RedditShareButton,
} = ShareButtons;

export default function Template({ data }) {
  const { mainPost: post } = data;
  const { nextPost: next } = data;
  const { siteUrl } = data.site.siteMetadata;

  const isProduction = process.env.NODE_ENV === 'production';
  const fullUrl = `${siteUrl}${post.frontmatter.path}`;

  return (
    <div>
      <ArticleSchema
        authorName={`女王控`}
        title={`${post.frontmatter.title}`}
        description={post.excerpt}
        date={post.frontmatter.date}
      />
      <MetaTags
        title={`${post.frontmatter.title}`}
        description={post.excerpt}
        tags={post.frontmatter.tags}
        path={post.frontmatter.path}
        siteUrl={siteUrl}
        noIndex={post.frontmatter.draft}
      />
      <Menu />
      <main className="blog container" role="main">
        <div className="medium-8 medium-offset-2 large-10 large-offset-1 post">
          <header className="post-head">
            <h1 className="post-title">{post.frontmatter.title}</h1>
          </header>
          <section className="post-meta">
            <div className="row">
              <div className="medium-4">
                <ul className="list-inline">
                  <li>
                    <GatsbyLink to="/" className="author-avatar" itemProp="name">
                      <Img sizes={data.file.childImageSharp.sizes} />
                    </GatsbyLink>
                  </li>
                  <li>
                    <div className="author-name">女王控</div>
                    <time className="post-date" dateTime={post.frontmatter.date}>
                      {post.frontmatter.date}
                    </time>
                  </li>
                </ul>
              </div>
              <div className="medium-8">
                <BulletListTags tags={post.frontmatter.tags} draft={post.frontmatter.draft} />
              </div>
            </div>
          </section>
          <Separator />
          <article className="main-post {{post_class}}">
            <section className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            <Separator />
            <footer className="post-footer">
              <section className="share text-center">
                {!post.frontmatter.draft ? (
                  <ul className="share-buttons list-inline">
                    <li>
                      <b>分享到</b>
                    </li>
                    <li className="link-twitter">
                      <TwitterShareButton
                        url={fullUrl}
                        title={post.frontmatter.title}
                        via="kbariotis"
                        className="share-twitter"
                      >
                        <span>Twitter</span>
                      </TwitterShareButton>
                    </li>
                    <li className="link-facebook">
                      <FacebookShareButton url={fullUrl} className="share-facebook">
                        <span>Facebook</span>
                      </FacebookShareButton>
                    </li>
                    <li className="link-google-plus">
                      <GooglePlusShareButton url={fullUrl} className="share-google-plus">
                        <span>Google+</span>
                      </GooglePlusShareButton>
                    </li>
                    <li className="link-reddit" title={post.frontmatter.title}>
                      <RedditShareButton url={fullUrl} className="share-reddit">
                        <span>Reddit</span>
                      </RedditShareButton>
                    </li>
                  </ul>
                ) : (
                  <small>这是草稿页，默认分享关闭</small>
                )}
              </section>
            </footer>

            <section className="blog-section">
              {isProduction && (
                <div>
                  <header className="header">
                    <h2>评论</h2>
                  </header>
                  <ReactDisqusThread
                    shortname="kostasbariotis"
                    identifier={uuidv5(fullUrl, uuidv5.URL)}
                    title={post.frontmatter.title}
                    url={fullUrl}
                  />
                </div>
              )}
            </section>

            <section className="blog-section">
              {next ? (
                <header className="header">
                  <h2>阅读下一章</h2>
                </header>
              ) : null}
              <NavigateLink post={next} />
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}

Template.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object,
};

export const pageQuery = graphql`
  query BlogPostByPath($mainPostPath: String!, $nextPostPath: String!) {
    file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    mainPost: markdownRemark(frontmatter: { path: { eq: $mainPostPath } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "YYYY-MM-DD HH:mm:ss")
        path
        tags
        title
        draft
      }
    }
    nextPost: markdownRemark(frontmatter: { path: { eq: $nextPostPath } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "YYYY-MM-DD HH:mm:ss")
        path
        tags
        title
        draft
      }
    }
  }
`;
