export const selectAllMembers = (state) => state.members;
export const selectGalleries = (state) => state.galleries;

export const selectMembersOfTeam = (teamName) => (state) =>
	state.members.members.members.filter((item) =>
		item.on_project.includes(teamName)
	);

export const selectAllCollaborators = (state) => state.collaborators;
export const selectAllProjects = (state) => state.projects;
export const selectAllNews = (state) => state.news;
