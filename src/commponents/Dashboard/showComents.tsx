import {
  Avatar,
  IconButton,
  Typography,
  Container,
  Box,
  Paper,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AddComment from './addComent';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import type { Comment } from '../../types';

export const ShowComments = () => {
  const comments: Comment[] = useLoaderData() as Comment[];
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  
  
  const isMyComment = (comment: Comment) => {
    return comment.author_email === user?.email;
  };

  return (
    <>
      <Container 
        maxWidth="md" 
        sx={{ 
          py: 4, 
          height: 'calc(100vh - 200px)', 
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" fontWeight={600}>
            Comments ({comments.length})
          </Typography>
        </Box>

        {/* Chat Container - ללא גלגלת */}
        <Box 
          sx={{ 
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            pb: 2,
            px: 1,
            // 👇 הסרת הגלגלת
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {comments.map((comment) => {
            const isMine = isMyComment(comment);
            
            return (
              <Box
                key={comment.id}
                sx={{
                  display: 'flex',
                  justifyContent: isMine ? 'flex-end' : 'flex-start',
                  alignItems: 'flex-start',
                  gap: 1
                }}
              >
                {/* Avatar - רק בצד שמאל (Agent/לא שלי) */}
                {!isMine && (
                  <Avatar 
                    sx={{ 
                      bgcolor: 'primary.main',
                      width: 36,
                      height: 36
                    }}
                  >
                    {comment.author_name?.charAt(0) || 'A'}
                  </Avatar>
                )}

                {/* Message Bubble */}
                <Box sx={{ maxWidth: '70%' }}>
                  {/* שם המחבר - רק למי שזה לא שלי */}
                  {!isMine && (
                    <Typography 
                      variant="caption" 
                      color="text.secondary"
                      sx={{ ml: 1, mb: 0.5, display: 'block' }}
                    >
                      {comment.author_name}
                    </Typography>
                  )}

                  {/* בועת הודעה */}
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      backgroundColor: isMine 
                        ? 'primary.main' 
                        : 'grey.100',
                      color: isMine 
                        ? 'white' 
                        : 'text.primary',
                      borderBottomRightRadius: isMine ? 4 : 16,
                      borderBottomLeftRadius: isMine ? 16 : 4,
                    }}
                  >
                    <Typography variant="body1">
                      {comment.content}
                    </Typography>
                    
                    {/* זמן */}
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        display: 'block',
                        mt: 0.5,
                        opacity: 0.8,
                        fontSize: '0.7rem',
                        textAlign: isMine ? 'right' : 'left'
                      }}
                    >
                      {new Date(comment.created_at).toLocaleTimeString('he-IL', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </Typography>
                  </Paper>
                </Box>

                {/* Avatar - בצד ימין (שלי) */}
                {isMine && (
                  <Avatar 
                    sx={{ 
                      bgcolor: 'secondary.main',
                      width: 36,
                      height: 36
                    }}
                  >
                    {comment.author_name?.charAt(0) || 'U'}
                  </Avatar>
                )}
              </Box>
            );
          })}
        </Box>
      </Container>
      
      {user?.role !== "admin" && <AddComment />}
    </>
  );
};

export default ShowComments;