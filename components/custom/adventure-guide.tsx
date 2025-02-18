import React from 'react';
import { Image } from "../../typescript/action";
import { AdventureGuideProps } from '../../models/page-models/adventure-guide-page';


export default function AdventureGuideProfile({ guide }: { guide: AdventureGuideProps }) {
    return (
      <div className='demo-section'>
          <div className='cards'>
            {guide.title && <h3 {...guide.title as {}}>{guide.title}</h3>}
            {guide.bio && <p {...guide.bio as {}}>{guide.bio}</p>}
            <div className='card-cta'>
            {guide.taxonomies.map((taxonomy, index) => (
                <li key={index}>{taxonomy.term_uid}</li>
            ))}            
            </div>
          </div>
      </div>
    );
  }