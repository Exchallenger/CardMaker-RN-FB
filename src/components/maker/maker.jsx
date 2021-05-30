import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput,authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Jihun',
      company: 'Kakao',
      theme: 'dark',
      title: 'Developer',
      email: 'qkwl1013@naver.com',
      message: 'go for it',
      fileName: 'jihun',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Gohun',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'gogo@naver.com',
      message: 'go for it',
      fileName: 'gohun',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'hihi',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: '@@',
      message: 'd for it',
      fileName: 'him',
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
        FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
