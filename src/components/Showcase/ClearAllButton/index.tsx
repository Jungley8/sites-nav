/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import {useClearQueryString} from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';

export default function ClearAllButton(): ReactNode {
  const clearQueryString = useClearQueryString();
  // TODO translate
  return (
    <button
      className="button button--outline button--primary"
      type="button"
      onClick={() => clearQueryString()}>
      <Translate id='showcase.filters.clearAll'>
        Clear All
      </Translate>
    </button>
  );
}
