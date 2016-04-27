import React, { Component } from 'react';
import classnames from 'classnames';
import { breakpoints } from '../../sass';

const CLASS_NAMES_SETS = {
  global: (props) => {
    return classnames(
      addDynamicClass(breakpoints, ({id}) => props.hiddenUntil === id, ({id}) => `ax-hidden-until--${id}`),
      addDynamicClass(breakpoints, ({id}) => props.visibleUntil === id, ({id}) => `ax-visible-until--${id}`),
    );
  },
  text: (props) => {
    return classnames(
      {
        'ax-text--left': props.textLeft === true,
        'ax-text--center': props.textCenter === true,
        'ax-text--right': props.textRight === true,
        'ax-text--bold': props.textBold === true,
        'ax-text--weak': props.textWeak === true,
        'ax-text--break-none': props.textBreak === 'none',
        'ax-text--break-all': props.textBreak === 'all',
        'ax-text--break-word': props.textBreak === 'word',
        'ax-text--uppercase': props.textCase === 'upper',
        'ax-text--capitalize': props.textCase === 'capital',
        'ax-text--lowercase': props.textCase === 'lower',
        'ax-text--ellipsis': props.textEllipsis === true,
      },
      addDynamicClass(breakpoints, ({id}) => props.textLeft === id, ({id}) => `ax-text--left--${id}`),
      addDynamicClass(breakpoints, ({id}) => props.textCenter === id, ({id}) => `ax-text--center--${id}`),
      addDynamicClass(breakpoints, ({id}) => props.textRight === id, ({id}) => `ax-text--right--${id}`),
    );
  },
};

export function addDynamicClass(array, findPredicate, classPredicate) {
  const element = array.find(findPredicate);

  if (element) {
    return classPredicate(element);
  }
}

export function mergeClassNameSets(props = {}, classNameSets) {
  return classnames(
    props.className,
    ...classNameSets.map((set) => CLASS_NAMES_SETS[set](props)),
  );
}
