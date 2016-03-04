class Rejector {

    // @ngInject
    constructor(applicationRootService) {
        this.arService = applicationRootService;
    }

    reject(task = null) {
        if(this.arService.done.has(task.date)) {
            this.arService.done.delete(task.date);
            task.done = false;
            this.arService.tasks.set(task.date, task);
        }
    }
}

export default {
    bindings: {},
    controller: Rejector,
    templateUrl: 'components/rejector/rejector.tpl.html'
};