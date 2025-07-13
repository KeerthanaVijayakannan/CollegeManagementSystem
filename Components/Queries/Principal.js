import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Principal() {
  return (
    <Container style={{ padding: '100px 0' }}>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        Principal
      </Typography>
      <Typography>
        Information about the principal, their background, vision, and leadership.
      </Typography>
    </Container>
  );
}
