import Image from "next/image";
import React from "react";

const chatMessages = [
  {
    className: "sent float-start",
    imageUrl: "/images/inbox/ms4.png",
    name: "Albert Flores",
    time: "35 mins",
    message: "¿Qué tan probable es que recomiendes nuestra empresa a tus amigos y familiares?",
  },
  {
    className: "reply float-end",
    imageUrl: "/images/inbox/ms5.png",
    name: "Tú",
    time: "35 mins",
    message: "Hola, solo queríamos informarte que te has suscrito a un repositorio en GitHub.",
  },
  {
    className: "reply float-end",
    imageUrl: "/images/inbox/ms3.png",
    name: "Tú",
    time: "35 mins",
    message: "¿Nos reunimos hoy?",
  },
  {
    className: "reply float-end",
    imageUrl: "/images/inbox/ms3.png",
    name: "Tú",
    time: "35 mins",
    message: "¡El proyecto finalmente está completo! ¡Vamos a celebrarlo!",
  },
  {
    className: "sent float-start",
    imageUrl: "/images/inbox/ms2.png",
    name: "Albert Flores",
    time: "35 mins",
    message: "¡Vamos!",
  },
  {
    className: "sent float-start",
    imageUrl: "/images/inbox/ms2.png",
    name: "Albert Flores",
    time: "35 mins",
    message: "simplemente texto de prueba de la industria de la impresión y composición tipográfica. Lorem Ipsum ha sido el estándar de la industria.",
  },
  {
    className: "sent float-start",
    imageUrl: "/images/inbox/ms2.png",
    name: "Albert Flores",
    time: "35 mins",
    message: "¡Hola, Juan!",
  },
];


const ChatMessage = ({ message }) => {
  return (
    <li className={message.className}>
      <div
        className={`d-flex align-items-center ${
          message.className === "sent float-start"
            ? "mb15"
            : "justify-content-end mb15"
        }`}
      >
        {message.className === "sent float-start" ? (
          <Image
            width={50}
            height={50}
            className="img-fluid rounded-circle align-self-start mr10"
            src={message.imageUrl}
            alt={`${message.name}'s profile`}
          />
        ) : null}
        <div
          className={`title fz14 ${
            message.className === "reply float-end" ? "mr10" : "ml10"
          }`}
        >
          {message.className === "reply float-end" ? (
            <small>{message.time}</small>
          ) : (
            <>
              {message.name} <small className="ml10">{message.time}</small>
            </>
          )}
        </div>
        {message.className === "reply float-end" ? (
          <Image
            width={50}
            height={50}
            className="img-fluid rounded-circle align-self-end ml10"
            src={message.imageUrl}
            alt={`${message.name}'s profile`}
          />
        ) : null}
      </div>
      <p>{message.message}</p>
    </li>
  );
};

const UserChatBoxContent = () => {
  return (
    <>
      {chatMessages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </>
  );
};

export default UserChatBoxContent;
