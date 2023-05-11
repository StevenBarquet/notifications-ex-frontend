// ---Dependencys
import React from 'react';
// ---Utils
import style from './LoadingFullScreen.module.scss';
import { useSelector } from 'react-redux';
import { FullPageLoader } from '@sudo-boss/spellbook/ContentPlatforms';

/**
 * LoadingFullScreen Component: Componente de carga global, escucha el isLoading global y pinta un spinner mientras este activo, recibe isLoading prop para debugear estilos de spinne
 * @param {{ isLoading?: boolean }} props
 * @returns {ReactElement} ReactElement
 */
export function LoadingFullScreen({ isLoading: propLoading }) {
  // -----------------------CONSTS, HOOKS, STATES
  const { isLoading } = useSelector((state) => state.appStateReducer);
  const isLoading2 = propLoading || isLoading;
  // -----------------------RENDER
  if (isLoading2) {
    return (
      <div className={style.LoadingFullScreen}>
        <FullPageLoader pageName="Loading..." subHeader="Our content is our magic" />
      </div>
    );
  }
  return null;
}
