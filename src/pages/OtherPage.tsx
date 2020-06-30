import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput } from '@ionic/react';
import React from 'react';

const OtherPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Other Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Other Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
           <IonLabel>Autofocused Input</IonLabel>
           <IonInput autofocus={true}></IonInput>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default OtherPage;
