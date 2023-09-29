import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import {homePageQuery} from "../utils/getQuery"
import { cleanAndTransformBlocks } from '../utils/cleanAndTransformBlock';
import { mapMainMenuItems } from '../utils/mapMainMenuItems';
import { BlockRenderer } from './components/BlockRenderer';
import { MainMenu } from './components/MainMenu';
import { MainMenuMobile } from './components/MainMenuMobile';







const App = () => {
  const [windowWidth, setWindowWidth] = useState(800);

  // Update windowWidth state on component mount
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []); // Empty dependency array means it runs once on mount

  // Update windowWidth state when the window size changes
  useEffect(() => {
    const handleResize = () => {
    setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
    window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]); // Dependency array includes windowWidth


    const { loading, error, data } = useQuery(homePageQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);
    const menuItems = mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems)
    // console.log(data.blogsposts.nodes)
    // console.log(blocks[3].attributes)


  return (
    <div className='w-[100%]'>
      {windowWidth <= 700 ? (
        <MainMenuMobile items={menuItems}/>
      ) : (
        <MainMenu items={menuItems}/>
      )}

      <BlockRenderer blocks={blocks}/>
    </div>
  )
}




export default App