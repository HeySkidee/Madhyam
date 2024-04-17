// import React from 'react';
// import Avatar from "react-avatar";
// import { FaRegComment } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { CiBookmark } from "react-icons/ci";
// import { MdOutlineDeleteOutline } from "react-icons/md";

// const Tweet = ({ tweet }) => {
//     // const { user } = useSelector(store => store.user);
//     // const dispatch = useDispatch();

//     const likeOrDislikeHandler = () => {
//         // Simulate liking/disliking action (replace with actual logic as needed)
//         console.log("Liked or disliked:", tweet._id);
//         // This dispatch is for updating the UI, assuming it's frontend-only
//         // dispatch(getRefresh());
//     }

//     const deleteTweetHandler = () => {
//         // Simulate deleting action (replace with actual logic as needed)
//         console.log("Deleted tweet:", tweet._id);
//         // This dispatch is for updating the UI, assuming it's frontend-only
//         // dispatch(getRefresh());
//     }

//     return (
//         <div className='border-b border-gray-200'>
//             <div>
//                 <div className='flex p-4'>
//                     <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} />
//                     <div className=' ml-2 w-full'>
//                         <div className='flex items-center'>
//                             <h1 className='font-bold'>{tweet?.userDetails[0]?.name}</h1>
//                             <p className='text-gray-500 text-sm ml-1'>{`@${tweet?.userDetails[0]?.username}`}</p>
//                         </div>
//                         <div>
//                             <p>{tweet?.description}</p>
//                         </div>
//                         <div className='flex justify-between my-3'>
//                             <div className='flex items-center'>
//                                 <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
//                                     <FaRegComment size="20px" />
//                                 </div>
//                                 <p>0</p>
//                             </div>
//                             <div className='flex items-center'>
//                                 <div onClick={likeOrDislikeHandler} className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
//                                     <CiHeart size="24px" />
//                                 </div>
//                                 <p>{tweet?.like?.length}</p>
//                             </div>
//                             <div className='flex items-center'>
//                                 <div className='p-2 hover:bg-yellow-200 rounded-full cursor-pointer'>
//                                     <CiBookmark size="24px" />
//                                 </div>
//                                 <p>0</p>
//                             </div>
//                             {/* {user?._id === tweet?.userId && ( */}
//                                 <div onClick={deleteTweetHandler} className='flex items-center'>
//                                     <div className='p-2 hover:bg-red-300 rounded-full cursor-pointer'>
//                                         <MdOutlineDeleteOutline size="24px" />
//                                     </div>
//                                 </div>
//                             {/* )} */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Tweet;

const Post = ({ post }) => {
    return (
       <div>
         <p>{post.description}</p>
       </div>
    );
   };
   
   export default Post;
   