import React, { useEffect, useState } from 'react'
import { BlockRenderer } from '../BlockRenderer';
import { gql, useQuery } from '@apollo/client';
import { slugQuery } from 'utils/getQuery';
import { MainMenu } from '../MainMenu';
import { cleanAndTransformBlocks } from 'utils/cleanAndTransformBlock';
import { mapMainMenuItems } from 'utils/mapMainMenuItems';
import { MainMenuMobile } from '../MainMenuMobile';





const Slug = ({url}) => {


    const uri = `${url}/`
    // console.log("uri", uri)


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




    const { loading, error, data } = useQuery(slugQuery, {
        variables: { uri },
        });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

        const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks) 
        const mainMenuItems = mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems);
        // console.log(blocks)
  return (
    <div className='w-[100%]'>
      {windowWidth <= 700 ? (
        <MainMenuMobile items={mainMenuItems}/>
      ) : (
        <MainMenu items={mainMenuItems}/>
      )}
        <BlockRenderer blocks={blocks} />
    </div>
  )
}

export default Slug