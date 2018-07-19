class Job {
    constructor( id, name, description, skills, area, responsibilities, salary, isImpaired, isActive ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.skills = skills;
        this.area = area;
        this.responsibilities = responsibilities;
        this.salary = salary;
        this.isImpaired = isImpaired;
        this.isActive = isActive;
    }
}

module.exports = Job;