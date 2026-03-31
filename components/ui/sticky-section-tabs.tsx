"use client";

import React, { Children, isValidElement } from 'react';
import { cn } from '@/lib/utils';

interface StickyTabItemProps {
  title: string;
  id: string | number;
  children: React.ReactNode;
}

const StickyTabItem: React.FC<StickyTabItemProps> = () => null;

interface StickyTabsProps {
  children: React.ReactNode;
  mainNavHeight?: string;
  rootClassName?: string;
  navSpacerClassName?: string;
  sectionClassName?: string;
  stickyHeaderContainerClassName?: string;
  headerContentWrapperClassName?: string;
  headerContentLayoutClassName?: string;
  titleClassName?: string;
  contentLayoutClassName?: string;
}

const StickyTabs: React.FC<StickyTabsProps> & { Item: React.FC<StickyTabItemProps> } = ({
  children,
  mainNavHeight = '6em',
  rootClassName = 'bg-black text-white',
  navSpacerClassName = 'border-b border-white/15 bg-black',
  sectionClassName = 'bg-[#131313]',
  stickyHeaderContainerClassName = 'shadow-lg',
  headerContentWrapperClassName = 'border-b border-t border-white/15 bg-black',
  headerContentLayoutClassName = 'mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8',
  titleClassName = 'my-0 text-2xl font-medium leading-none md:text-3xl lg:text-4xl',
  contentLayoutClassName = 'mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8',
}) => {
  const stickyTopValue = `calc(${mainNavHeight} - 1px)`;
  const navHeightStyle = { height: mainNavHeight };
  const stickyHeaderStyle = { top: stickyTopValue };

  return (
    <div className={cn('overflow-clip', rootClassName)}>
      <div
        className={cn('sticky left-0 top-0 z-20 w-full', navSpacerClassName)}
        style={navHeightStyle}
        aria-hidden="true"
      />

      {Children.map(children, (child) => {
        if (!isValidElement(child) || child.type !== StickyTabItem) return null;

        const itemElement = child as React.ReactElement<StickyTabItemProps>;
        const { title, id, children: itemContent } = itemElement.props;

        return (
          <section key={id} id={id.toString()} className={cn('relative overflow-clip', sectionClassName)}>
            <div
              className={cn('sticky z-10 -mt-px flex flex-col', stickyHeaderContainerClassName)}
              style={stickyHeaderStyle}
            >
              <div className={cn(headerContentWrapperClassName)}>
                <div className={cn(headerContentLayoutClassName)}>
                  <h2 className={cn(titleClassName)}>{title}</h2>
                </div>
              </div>
            </div>
            <div className={cn(contentLayoutClassName)}>{itemContent}</div>
          </section>
        );
      })}
    </div>
  );
};

StickyTabs.Item = StickyTabItem;
export default StickyTabs;
