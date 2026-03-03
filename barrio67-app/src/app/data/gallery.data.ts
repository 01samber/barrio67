export interface GalleryItem {
  src: string;
  type: 'image' | 'video';
  caption: string;
  alt?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: 'assets/gallery-1.jpg', type: 'image', caption: 'Where the Old Souk comes alive at dusk', alt: 'Barrio 67 at twilight' },
  { src: 'assets/gallery-2.jpg', type: 'image', caption: 'Stories unfold under Batroun\'s starlit sky', alt: 'Evening atmosphere' },
  { src: 'assets/gallery-3.jpg', type: 'image', caption: 'A corner where time moves a little slower', alt: 'Cozy corner' },
  { src: 'assets/gallery-4.mp4', type: 'video', caption: 'Culinary moments worth savoring', alt: 'Food experience' },
  { src: 'assets/gallery-5.mp4', type: 'video', caption: 'The warmth of shared plates and laughter', alt: 'Dining experience' },
  { src: 'assets/gallery-6.mp4', type: 'video', caption: 'Every bite tells a story of the Mediterranean', alt: 'Fresh cuisine' },
  { src: 'assets/gallery-7.jpg', type: 'image', caption: 'Where vintage charm meets modern nightlife', alt: 'Bar atmosphere' },
  { src: 'assets/gallery-8.jpg', type: 'image', caption: 'Crafted with care, served with soul', alt: 'Signature dishes' },
  { src: 'assets/gallery-9.mp4', type: 'video', caption: 'Live music fills the cobblestone air', alt: 'Live music night' },
  { src: 'assets/gallery-10.jpg', type: 'image', caption: 'Al fresco under the Lebanese moon', alt: 'Outdoor seating' },
  { src: 'assets/wallpaper.jpg', type: 'image', caption: 'Look for the green doors — your escape awaits', alt: 'Barrio 67 entrance' },
  { src: 'assets/gallery-12.jpg', type: 'image', caption: 'Handcrafted cocktails, perfectly poured', alt: 'Craft cocktails' },
  { src: 'assets/gallery-13.jpg', type: 'image', caption: 'A toast to good company and great moments', alt: 'Cheers at Barrio 67' },
  { src: 'assets/gallery-14.jpg', type: 'image', caption: 'The soul of Batroun\'s historic heart', alt: 'Old Souk charm' },
  { src: 'assets/gallery-15.jpg', type: 'image', caption: 'Where strangers become friends over shared tables', alt: 'Barrio 67 experience' }
];
