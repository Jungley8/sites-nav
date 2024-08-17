/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { translate } from '@docusaurus/Translate';
import { sortBy } from '../utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/facebook/docusaurus/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  | 'favorite'
  | 'opensource'
  | 'free'
  | 'premium'
  | 'crossplatform'
  | 'cloud'
  | 'saas'
  | 'android'
  | 'web'
  | 'ios';

// Add sites to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'AgileTs',
    description: 'Global State and Logic Framework for reactive Applications',
    // preview: require('./showcase/agilets.png'),
    website: 'https://agile-ts.org/',
    source: 'https://github.com/agile-ts/documentation',
    tags: ['opensource', 'design'],
  },
  {
    title: 'AI-Speaker',
    description: 'Local, reliable, fast and private Audio and IoT gate.',
    // preview: require('./showcase/aispeaker.png'),
    website: 'https://ai-speaker.com/',
    source: 'https://github.com/sviete/AIS-WWW',
    tags: ['opensource'],
  },

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type User = {
  title: string;
  description: string;
  preview?: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  favorite: {
    label: translate({
      message: 'Favorite',
      id: 'showcase.tag.favorite.label',
    }),
    description: translate({
      message:
        'Our favorite Docusaurus sites that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },
  opensource: {
    label: translate({
      message: 'Open Source',
      id: 'showcase.tag.opensource.label',
    }),
    description: translate({
      message:
        'Open source projects that are freely available for modification and distribution.',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },
  free: {
    label: translate({ message: 'Free', id: 'showcase.tag.free.label' }),
    description: translate({
      message: 'Websites and tools that are completely free to use.',
      id: 'showcase.tag.free.description',
    }),
    color: '#dfb81c',
  },
  premium: {
    label: translate({ message: 'Premium', id: 'showcase.tag.premium.label' }),
    description: translate({
      message:
        'High-quality services and websites that require a subscription or payment.',
      id: 'showcase.tag.premium.description',
    }),
    color: '#ff7e29',
  },
  crossplatform: {
    label: translate({
      message: 'Cross Platform',
      id: 'showcase.tag.crossplatform.label',
    }),
    description: translate({
      message:
        'Tools and applications that work across multiple platforms seamlessly.',
      id: 'showcase.tag.crossplatform.description',
    }),
    color: '#f06595',
  },
  cloud: {
    label: translate({ message: 'Cloud', id: 'showcase.tag.cloud.label' }),
    description: translate({
      message:
        'Websites and services that are cloud-based, offering scalable and flexible solutions.',
      id: 'showcase.tag.cloud.description',
    }),
    color: '#00aaff',
  },
  saas: {
    label: translate({ message: 'SaaS', id: 'showcase.tag.saas.label' }),
    description: translate({
      message:
        'Software as a Service platforms that provide online software solutions.',
      id: 'showcase.tag.saas.description',
    }),
    color: '#6867ac',
  },
  android: {
    label: translate({ message: 'Android', id: 'showcase.tag.android.label' }),
    description: translate({
      message:
        'Applications and services specifically designed for Android devices.',
      id: 'showcase.tag.android.description',
    }),
    color: '#3ddc84',
  },
  web: {
    label: translate({ message: 'Web', id: 'showcase.tag.web.label' }),
    description: translate({
      message: 'Web-based platforms and services accessible via web browsers.',
      id: 'showcase.tag.web.description',
    }),
    color: '#4c9aff',
  },
  ios: {
    label: translate({ message: 'iOS', id: 'showcase.tag.ios.label' }),
    description: translate({
      message:
        'Applications and services specifically designed for iOS devices.',
      id: 'showcase.tag.ios.description',
    }),
    color: '#000000',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
