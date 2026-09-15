import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import { firestore } from './firebase';

export type WishEntry = {
  wish: string;
  sender: string;
  createdAt: string;
};

@Injectable({ providedIn: 'root' })
export class WishesService {
  private readonly wishesCollection = collection(firestore, 'wishes');

  async save(wish: string, sender: string): Promise<WishEntry> {
    const entry: WishEntry = {
      wish,
      sender: sender || 'Shreya',
      createdAt: new Date().toISOString(),
    };

    await addDoc(this.wishesCollection, {
      ...entry,
      createdAt: Timestamp.fromDate(new Date(entry.createdAt)),
    });
    return entry;
  }

  async list(): Promise<WishEntry[]> {
    const wishes = await getDocs(query(this.wishesCollection, orderBy('createdAt', 'desc')));
    return wishes.docs.map((wish) => {
      const data = wish.data();
      const createdAt = data['createdAt'] instanceof Timestamp ? data['createdAt'].toDate().toISOString() : String(data['createdAt']);
      return { wish: String(data['wish']), sender: String(data['sender']), createdAt };
    });
  }
}
