import mongoose from 'mongoose';

enum ProjectStatus {
  INACTIVE,
  ACTIVE,
  ARCHIVE,
  DELETED,
}

const ProjectsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ProjectStatus,
      default: ProjectStatus.ACTIVE,
    },
    created_at: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Projects = mongoose.model('projects', ProjectsSchema);

export default Projects;
