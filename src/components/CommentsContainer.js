import React from "react";

const commentsData = [
  {
    name: "jassu",
    text: "hey hi",
    replies: [
      {
        name: "jassu",
        text: "hey hi",
        replies: [
          {
            name: "jassu",
            text: "hey hi",
            replies: [
              {
                name: "jassu",
                text: "hey hi",
                replies: [
                  {
                    name: "jassu",
                    text: "hey hi",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "jassu",
    text: "hey hi",
    replies: [
      {
        name: "jassu",
        text: "hey hi",
        replies: [],
      },
    ],
  },
  {
    name: "jassu",
    text: "hey hi",
    replies: [
      {
        name: "jassu",
        text: "hey hi",
        replies: [
          {
            name: "jassu",
            text: "hey hi",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "jassu",
    text: "hey hi",
    replies: [
      {
        name: "jassu",
        text: "hey hi",
        replies: [
          {
            name: "jassu",
            text: "hey hi",
            replies: [
              {
                name: "jassu",
                text: "hey hi",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "jassu",
    text: "hey hi",
    replies: [
      {
        name: "jassu",
        text: "hey hi",
        replies: [
          {
            name: "jassu",
            text: "hey hi",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "jassu",
    text: "hey hi",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://static.vecteezy.com/system/resources/previews/007/033/146/non_2x/profile-icon-login-head-icon-vector.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-left-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
