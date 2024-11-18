// 添加學習進度追蹤
const Progress = {
    saveProgress(courseId, sectionId) {
        const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
        if (!progress[courseId]) progress[courseId] = [];
        if (!progress[courseId].includes(sectionId)) {
            progress[courseId].push(sectionId);
            localStorage.setItem('courseProgress', JSON.stringify(progress));
        }
    },
    
    getProgress(courseId) {
        const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
        return progress[courseId] || [];
    }
}; 