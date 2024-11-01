// src/components/SEO.js

import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: 'Belbin Team Roles Assessment',
  description: 'A web application to assess team roles based on Belbin’s model, developed by Madusanka Premaratne during MBA studies at London Metropolitan University.',
  keywords: ['Belbin', 'Team Roles', 'Assessment', 'London Metropolitan University', 'Madusanka Premaratne'],
};

export default SEO;
