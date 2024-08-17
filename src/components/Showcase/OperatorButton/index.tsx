/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useId} from 'react';
import clsx from 'clsx';
import {useOperator} from '../../_utils';

import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

export default function OperatorButton() {
  const id = useId();
  const [operator, toggleOperator] = useOperator();
  // TODO add translations
  return (
    <>
      <input
        id={id}
        type="checkbox"
        className="screen-reader-only"
        aria-label="Toggle between or and and for the tags you selected"
        checked={operator === 'AND'}
        onChange={toggleOperator}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleOperator();
          }
        }}
      />
      <label htmlFor={id} className={clsx(styles.checkboxLabel, 'shadow--md')}>
        {/* eslint-disable @docusaurus/no-untranslated-text */}
        <span className={styles.checkboxLabelOr}>
          <Translate id="showcase.operator.or" >OR</Translate>
        </span>
        <span className={styles.checkboxLabelAnd}>
          <Translate id="showcase.operator.and" >AND</Translate>
        </span>
        {/* eslint-enable @docusaurus/no-untranslated-text */}
      </label>
    </>
  );
}
