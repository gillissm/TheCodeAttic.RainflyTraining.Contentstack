'use client';

import { AdventureGuideProps } from '@/types/page-models';
import React from 'react';



export function AdventureGuideProfile({ guide }: { guide: AdventureGuideProps }) {
    return (
      <div className='demo-section'>
          <div className='cards'>
            {guide.title && <h3 {...guide.$.title}>{guide.title}</h3>}
            {guide.bio && <p {...guide.$.bio}>{guide.bio}</p>}
            <div className='card-cta'>
            {guide.taxonomies.map((taxonomy, index) => (
                <li key={index}>{taxonomy.term_uid}</li>
            ))}            
            </div>
          </div>
      </div>
    );
  }