import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const config = {
  projectId: '6ij4q6wx',
  dataset: 'production',
  apiVersion: '2023-09-23',
  useCdn: false,
};

const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);

export default client;
