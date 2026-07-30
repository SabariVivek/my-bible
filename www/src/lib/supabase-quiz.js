// Supabase Quiz Service
// Handles quiz score submission and retrieval

const supabaseQuiz = {
    // Submit quiz score for today
    async submitQuizScore(userId, quizData) {
        try {
            const today = new Date().toISOString().split('T')[0];
            
            const { data, error } = await supabase
                .from('quiz_scores')
                .upsert({
                    user_id: userId,
                    quiz_date: today,
                    score: quizData.score,
                    total_questions: quizData.totalQuestions,
                    chapters_quiz: quizData.chapters
                }, {
                    onConflict: 'user_id,quiz_date'
                })
                .select();
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error submitting quiz score:', error);
            throw error;
        }
    },

    // Get today's quiz scores (leaderboard)
    async getTodayLeaderboard() {
        try {
            const { data, error } = await supabase
                .from('quiz_leaderboard_today')
                .select('*')
                .order('rank', { ascending: true });
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error fetching today\'s leaderboard:', error);
            throw error;
        }
    },

    // Get all-time leaderboard
    async getAllTimeLeaderboard() {
        try {
            const { data, error } = await supabase
                .from('quiz_leaderboard_all_time')
                .select('*')
                .order('rank', { ascending: true });
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error fetching all-time leaderboard:', error);
            throw error;
        }
    },

    // Get user's quiz score for today
    async getTodayQuizScore(userId) {
        try {
            const today = new Date().toISOString().split('T')[0];
            
            const { data, error } = await supabase
                .from('quiz_scores')
                .select('*')
                .eq('user_id', userId)
                .eq('quiz_date', today)
                .single();
            
            if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows
            return data;
        } catch (error) {
            console.error('Error fetching today\'s quiz score:', error);
            throw error;
        }
    },

    // Get user's all quiz attempts
    async getUserQuizHistory(userId) {
        try {
            const { data, error } = await supabase
                .from('quiz_scores')
                .select('*')
                .eq('user_id', userId)
                .order('quiz_date', { ascending: false });
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error fetching quiz history:', error);
            throw error;
        }
    }
};
