import React from 'react';
import ImageEgger from '@/components/ImageEgger';

const ThreeItem = ({photos = [], onClick}) => {
  return (
    <div className="flex flex-wrap w-full">
        {photos.slice(0, 3).map( (item, index) => 
           <div key={item.id} className={`${index === 0 ? 'w-full' : 'w-1/2'} p-1 md:p-2 relative cursor-pointer`} onClick={() => onClick(index)}>
              <ImageEgger 
              src={"https://i.pinimg.com/736x/a2/6b/d3/a26bd3b88f30608733ab7cdc630066e6.jpg"}
                alt={item.id}
                width={650}
                height={400}
                priority
                layout="raw"
                className="block object-cover object-center w-full h-full rounded-lg"
                onClick={() => onClick(index)}
              />
              {index === 2 && photos.length !== 3 &&
              <div className="absolute bottom-0 top-0 h-full left-0 right-0 p-1 md:p-2 opacity-70">
                <h2 className="text-3xl text-white font-bold bg-gray-800 h-full flex justify-center items-center  rounded-lg">
                    {photos.length - 3}+</h2>
              </div>
           }
          </div>
        )}
      </div>
  )
}

const FourItem = ({photos = [], onClick}) => {
  return (
    <div className="flex flex-wrap w-full">
        {photos.slice(0, 4).map( (item, index) => 
           <div key={item.id} className={`w-1/2 p-1 md:p-2 relative cursor-pointer`} onClick={() => onClick(index)}>
              <ImageEgger 
              src={"https://i.pinimg.com/736x/a2/6b/d3/a26bd3b88f30608733ab7cdc630066e6.jpg"}
                alt={item.id}
                width={650}
                height={400}
                priority
                layout="raw"
                className="block object-cover object-center w-full h-full rounded-lg"
              />
              {index === 3 && photos.length !== 4 &&
              <div className="absolute bottom-0 top-0 h-full left-0 right-0 p-1 md:p-2 opacity-70">
                <h2 className="text-3xl text-white font-bold bg-gray-800 h-full flex justify-center items-center  rounded-lg">
                    {photos.length - 4}+</h2>
              </div>
           }
          </div>
        )}
      </div>
  )
}

const FiveItem = ({photos = [], onClick}) => {
  return (
    <div className="flex flex-wrap w-full">
      <div className="flex flex-wrap w-2/3">
        {photos.slice(0, 3).map( (item, index) => 
          <div key={item.id} className={`${index === 2 ?  'w-full' : 'w-1/2'} p-1 md:p-2 cursor-pointer`} onClick={() => onClick(index)}>
            <ImageEgger 
           src={"https://i.pinimg.com/736x/a2/6b/d3/a26bd3b88f30608733ab7cdc630066e6.jpg"}
              alt={item.id}
              width={650}
              height={400}
              priority
              layout="raw"
              className="block object-cover object-center w-full h-full rounded-lg"
            />
          </div>
        )}
      </div>
      <div className="flex flex-wrap w-1/3">
        {photos.slice(3, 5).map( (item, index) => 
          <div key={item.id} className='w-full p-1 md:p-2 relative cursor-pointer' onClick={() => onClick(index)}>
            <ImageEgger 
             src={"https://i.pinimg.com/736x/a2/6b/d3/a26bd3b88f30608733ab7cdc630066e6.jpg"}
              alt={item.id}
              width={650}
              height={400}
              priority
              layout="raw"
              className="block object-cover object-center w-full h-full rounded-lg"
            />
            {index === 1 && photos.length !== 5 &&
              <div className="absolute bottom-0 top-0 h-full left-0 right-0 p-1 md:p-2 opacity-70">
                <h2 className="text-3xl text-white font-bold bg-gray-800 h-full flex justify-center items-center  rounded-lg">
                    {photos.length - 5}+</h2>
              </div>
            }  
          </div>
        )}
      </div>
     </div>
  )
}

const renderResource = ({photos = [], onClick}) => {
  const length = photos.length;
  let result;
  if (length === 1) {
    result =  <ImageEgger 
    src={"https://i.pinimg.com/736x/a2/6b/d3/a26bd3b88f30608733ab7cdc630066e6.jpg"}
    alt={photos[0].id}
    width={650}
    height={400}
    priority
    layout="raw"
    className="block object-cover object-center w-full h-full rounded-lg"
    onClick={() => onClick(0)}
  />
  } else if ( length === 2 ) {

  } else if (length % 3 === 0) {
    result = <ThreeItem photos={photos} onClick={onClick}/>
  } else if (length % 4 === 0) {
    result = <FourItem photos={photos} onClick={onClick} />
  } else {
    result = <FiveItem photos={photos} onClick={onClick} />
  }
  return result
}

const MultipleImage = (props) => {
  const {photos = [], onClick} = props
  return (
    <section className="overflow-hidden text-gray-700 rounded-lg mt-1">
        <div className="container py-2 mx-auto">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-full"> 
              {renderResource({photos, onClick})}
            </div>
          </div>
        </div>
      </section>
  )
}

export default MultipleImage;