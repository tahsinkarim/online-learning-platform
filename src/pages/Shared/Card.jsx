import { mdiArrowRightThin, mdiStar, mdiStarHalfFull } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { title, img, author, rating, price, previous_price, id } = data;
  let newTitle = title;
  if (newTitle.length > 45) {
    newTitle = newTitle.slice(0, 45) + "...";
  }
  return (
    <div className='card bg-base-100 rounded-none shadow-md'>
      <figure>
        <Link to={`/course/${id}`}>
          <img src={img} alt='Shoes' />
        </Link>
      </figure>
      <div className='card-body px-2 py-2'>
        <div>
          <h2 className='card-title text-base md:hidden xl:block'>{title}</h2>
          <h2 className='card-title text-base hidden md:block xl:hidden'>
            {newTitle}
          </h2>
          <span className='text-gray-500'>
            <small>{author}</small>
          </span>
          <p className='text-sm text-yellow-600 font-semibold flex items-center gap-2'>
            <span>{data.rating}</span>
            <span className='flex'>
              <Icon size={0.7} path={mdiStar}></Icon>
              <Icon size={0.7} path={mdiStar}></Icon>
              <Icon size={0.7} path={mdiStar}></Icon>
              <Icon size={0.7} path={mdiStar}></Icon>
              <Icon size={0.7} path={mdiStarHalfFull}></Icon>
            </span>
          </p>
          <p>
            <small>$</small>
            <span className='font-bold mr-2'>{price}</span>
            <small className='line-through'>
              $<span>{previous_price}</span>
            </small>
          </p>
        </div>
        <div className='card-actions justify-end'>
          <Link
            to={`/course/${id}`}
            className='text-clr-violet font-semibold flex items-center'
          >
            <span>Details</span>
            <Icon size={1} path={mdiArrowRightThin}></Icon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;