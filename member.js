function skillsmember() {
    var skills = document.getElementById("skills").value;
    var skills = skills.split(",");
    var skills = skills.map(function (skill) {
        return skill.trim();
    });
    var skills = skills.filter(function (skill) {
        return skill.length > 0;
    });
    var skills = skills.map(function (skill) {
        return skill.toLowerCase();
    });
    var skills = Array.from(new Set(skills));
    var skills = skills.join(", ");
    document.getElementById("skills").value = skills;
}