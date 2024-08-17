/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Translate, {translate} from '@docusaurus/Translate';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import ShowcaseSearchBar from '../components/Showcase/ShowcaseSearchBar';
import ShowcaseCards from '../components/Showcase/ShowcaseCards';
import ShowcaseFilters from '../components/Showcase/ShowcaseFilters';
import ShowcaseSidebar from '../components/ShowcaseSidebar';

const TITLE = translate({message: 'Docusaurus Site Showcase'});
const DESCRIPTION = translate({
  message: 'List of websites people are building with Docusaurus',
});
const SUBMIT_URL = 'https://github.com/facebook/docusaurus/discussions/7826';

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
      <Link className="button button--primary" to={SUBMIT_URL}>
        <Translate id="showcase.header.button">
          🙏 Please add your site
        </Translate>
      </Link>
    </section>
  );
}

export default function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <div className="flex">
          {/* <ShowcaseSidebar /> */}
          <div className="flex-1">
            <ShowcaseFilters />
            <div
              style={{display: 'flex', marginLeft: 'auto'}}
              className="container">
              <ShowcaseSearchBar />
            </div>
            <ShowcaseCards />
          </div>
        </div>
      </main>
    </Layout>
  );
}
