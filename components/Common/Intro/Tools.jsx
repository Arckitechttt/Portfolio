import React, { useState } from 'react';
import Badge from '../Badge';
import { TECH_STACK } from '../../../constants/constants';

const Tools = () => {
  const [showAll, setShowAll] = useState(false);
  let totalChars = 0;
  const cutoffIndex = TECH_STACK.findIndex(item => {
    totalChars += item.length;
    return totalChars > 100;
  });

  const displayedTechStack = showAll ? TECH_STACK : TECH_STACK.slice(0, cutoffIndex + 1);

  return (
    <div className='flex flex-col space-y-1 pt-6'>
      <div className='flex flex-col gap-y-4'>
        <span className='text-Snow text-xs font-bold'>Skills</span>
        <div className='flex flex-wrap gap-2'>
          {displayedTechStack.map((item, index) => (
            <Badge key={index} title={item} />
          ))}
          {TECH_STACK.length > cutoffIndex + 1 && (
            <button onClick={() => setShowAll(!showAll)} className='text-green-400 hover:underline text-xs italic'>
              {showAll ? 'Read Less...' : 'Read More...'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tools;