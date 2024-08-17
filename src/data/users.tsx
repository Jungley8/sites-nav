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
  | 'app'
  | 'linux'
  | 'macos'
  | 'windows'
  | 'android'
  | 'web'
  | 'ios';

// Add sites to this list
// prettier-ignore
const Users: User[] = [
  {
    title: translate({message: 'IT Tools', id: 'showcase.sites.it-tools.title'}),
    description: translate({message: 'Handy tools for developers', id: 'showcase.sites.it-tools.description'}),
    // preview: require('./showcase/agilets.png'),
    website: 'https://it-tools.appio.fun',
    source: 'https://github.com/jungley8/it-tools',
    tags: ['opensource', 'free', 'web'],
  },
  {
    title: translate({message: 'n8n', id: 'showcase.sites.n8n.title'}),
    description: translate({message: " Workflow automation tool, Easily automate tasks across different services.", id: 'showcase.sites.n8n.description'}),
    // preview: require('./showcase/aispeaker.png'),
    website: 'https://n8n.io',
    source: 'https://github.com/n8n-io/n8n',
    tags: ['opensource', 'web'],
  },

  {
    title: translate({message: 'Code Server', id: 'showcase.sites.code-server.title'}),
    description: translate({message: "Run VS Code on any machine anywhere and access it in the browser.", id: 'showcase.sites.code-server.description'}),
    // preview: require('./showcase/aispeaker.png'),
    website: 'https://coder.com/',
    source: 'https://github.com/coder/code-server',
    tags: ['opensource', 'free', 'web'],
  },

  {
    title: translate({message: 'Upscayl', id: 'showcase.sites.upscayl.title'}),
    description: translate({message: "Upscayl lets you enlarge and enhance low-resolution images using advanced AI algorithms. Enlarge images without losing quality.", id: 'showcase.sites.upscayl.description'}),
    preview: require('./showcase/upscayl.png'),
    website: 'https://upscayl.org',
    source: 'https://github.com/upscayl/upscayl',
    tags: ['free', 'linux', 'macos', 'windows'],
  },

  {
    title: translate({message: 'Clarity', id: 'showcase.sites.clarity.title'}),
    description: translate({message: "A behavioral analytics library that uses dom mutations and user interactions to generate aggregated insights.", id: 'showcase.sites.clarity.description'}),
    // preview: require('./showcase/aispeaker.png'),
    website: 'https://clarity.microsoft.com',
    source: 'https://github.com/microsoft/clarity',
    tags: ['free', 'web'],
  },

  {
    title: translate({message: 'Dify', id: 'showcase.sites.dify.title'}),
    description: translate({message: "An LLM app development platform that combines AI workflows, RAG pipelines, agent capabilities, model management, observability features, and more, enabling you to quickly move from prototype to production.", id: 'showcase.sites.dify.description'}),
    // preview: require('./showcase/aispeaker.png'),
    website: 'https://dify.ai',
    source: 'https://github.com/langgenius/dify',
    tags: ['opensource', 'web'],
  },
  {
    title: translate({message: 'Lobe Chat', id: 'showcase.sites.lobe-chat.title'}),
    description: translate({message: "An modern-design LLMs/AI chat framework. Supports Multi AI Providers, Multi-Modals (Vision/TTS) and plugin system.", id: 'showcase.sites.lobe-chat.description'}),
    // preview: require('./showcase/aispeaker.png'),
    website: 'https://lobehub.com',
    source: 'https://github.com/lobehub/lobe-chat',
    tags: ['opensource', 'web'],
  },
  {
    title: translate({message: 'Tldraw', id: 'showcase.sites.tldraw.title'}),
    description: translate({message: "SDK for creating whiteboards and canvas experiences on the web.", id: 'showcase.sites.tldraw.description'}),
    // preview: require('./showcase/aispeaker.png'),
    website: 'https://tldraw.dev',
    source: 'https://github.com/tldraw/tldraw',
    tags: ['opensource', 'web'],
  },
  {
    title: translate({message: 'Web-Check', id: 'showcase.sites.web-check.title'}),
    description: translate({message: "Comprehensive, on-demand open source intelligence for any website, All-in-one OSINT tool for analysing any website", id: 'showcase.sites.web-check.description'}),
    preview: require('./showcase/web-check.png'),
    website: 'https://web-check.xyz',
    source: 'https://github.com/Lissy93/web-check',
    tags: ['opensource', 'web'],
  },
  {
    title: translate({message: 'Syncthing', id: 'showcase.sites.syncthing.title'}),
    description: translate({message: "A continuous file synchronization program", id: 'showcase.sites.syncthing.description'}),
    // preview: require('./showcase/aispeaker.png'),
    website: 'https://syncthing.net',
    source: 'https://github.com/syncthing/syncthing',
    tags: ['opensource', 'app'],
  },

  {
    title: translate({message: 'Awesome-Selfhosted', id: 'showcase.sites.awesome-selfhosted.title'}),
    description: translate({message: "A list of Free Software network services and web applications which can be hosted on your own servers", id: 'showcase.sites.awesome-selfhosted.description'}),
    // preview: require('./showcase/aispeaker.png'),
    website: 'https://awesome-selfhosted.net',
    source: 'https://github.com/awesome-selfhosted/awesome-selfhosted',
    tags: ['opensource', 'web'],
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
  app: {
    label: translate({ message: 'App', id: 'showcase.tag.app.label' }),
    description: translate({
      message:
        'Applications and services that run on a device and provide a user interface.',
      id: 'showcase.tag.app.description',
    }),
    color: '#fcc02b',
  },
  linux: {
    label: translate({ message: 'Linux', id: 'showcase.tag.linux.label' }),
    description: translate({
      message:
        'Applications and services that run on the Linux operating system.',
      id: 'showcase.tag.linux.description',
    }),
    color: '#fcc02b',
  },
  macos: {
    label: translate({ message: 'macOS', id: 'showcase.tag.macos.label' }),
    description: translate({
      message:
        'Applications and services that run on the macOS operating system.',
      id: 'showcase.tag.macos.description',
    }),
    color: '#000000',
  },
  windows: {
    label: translate({ message: 'Windows', id: 'showcase.tag.windows.label' }),
    description: translate({
      message:
        'Applications and services that run on the Windows operating system.',
      id: 'showcase.tag.windows.description',
    }),
    color: '#00aaff',
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
