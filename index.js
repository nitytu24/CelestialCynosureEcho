// 导入外部库
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');

// 定义任务类
class Task {
    constructor(description, priority = "medium", status = "pending") {
        this.description = description;
        this.priority = priority;
        this.status = status;
    }
}

// 定义团队成员类
class TeamMember {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

// 定义项目管理工具类
class ProjectManagementSolution {
    constructor() {
        this.tasks = [];
        this.teamMembers = [];
        this.projectAnalytics = {};
        this.reliable = true;
        this.robust = true;
    }

    // 添加任务
    addTask(description, priority, status) {
        const task = new Task(description, priority, status);
        this.tasks.push(task);
    }

    // 添加团队成员
    addTeamMember(name, role) {
        const teamMember = new TeamMember(name, role);
        this.teamMembers.push(teamMember);
    }

    // 设置项目分析数据
    setProjectAnalytics(analytics) {
        this.projectAnalytics = analytics;
    }

    // 查看任务
    viewTasks() {
        console.log("Tasks:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} - Priority: ${task.priority}, Status: ${task.status}`);
        });
    }

    // 查看团队成员
    viewTeamMembers() {
        console.log("Team Members:");
        this.teamMembers.forEach((member, index) => {
            console.log(`${index + 1}. ${member.name} - Role: ${member.role}`);
        });
    }

    // 查看项目分析
    viewProjectAnalytics() {
        console.log("Project Analytics:");
        console.log(this.projectAnalytics);
    }

    // 获取当前日期
    getCurrentDate() {
        return moment().format('YYYY-MM-DD');
    }

    // 下载文件
    async downloadFile(url, destination) {
        try {
            const response = await axios.get(url, { responseType: 'stream' });
            const writer = fs.createWriteStream(destination);
            response.data.pipe(writer);
            return new Promise((resolve, reject) => {
                writer.on('finish', resolve);
                writer.on('error', reject);
            });
        } catch (error) {
            console.error("Failed to download file:", error);
        }
    }

    // 生成报告
    generateReport() {
        const filename = `project_report_${this.getCurrentDate()}.pdf`;
        this.downloadFile('http://example.com/report', filename)
            .then(() => console.log(`Report generated: ${filename}`))
            .catch(error => console.error("Failed to generate report:", error));
    }
}

// 示例用法
const projectManager = new ProjectManagementSolution();

// 添加任务
projectManager.addTask("Design UI mockups", "high", "pending");
projectManager.addTask("Develop backend functionality", "medium", "in progress");
projectManager.addTask("Write documentation", "low", "completed");

// 添加团队成员
projectManager.addTeamMember("John Doe", "UI Designer");
projectManager.addTeamMember("Jane Smith", "Backend Developer");
projectManager.addTeamMember("Alice Johnson", "Technical Writer");

// 设置项目分析数据
projectManager.setProjectAnalytics({ progress: "50%", issues: 3 });

// 查看任务、
