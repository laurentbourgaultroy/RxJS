    /**
     *  Returns an observable sequence that contains a single element, using the specified scheduler to send out observer messages.
     *  There is an alias called 'returnValue' for browsers <IE9.
     *  
     * @example
     *  var res = Rx.Observable.return(42);
     *  var res = Rx.Observable.return(42, Rx.Scheduler.timeout);
     * @param {Mixed} value Single element in the resulting observable sequence.
     * @param {Scheduler} scheduler Scheduler to send the single element on. If not specified, defaults to Scheduler.immediate.
     * @returns {Observable} An observable sequence containing the single specified element.
     */
    var observableReturn = Observable['return'] = Observable.returnValue = function (value, scheduler) {
        scheduler || (scheduler = immediateScheduler);
        return new AnonymousObservable(function (observer) {
            return scheduler.schedule(function () {
                observer.onNext(value);
                observer.onCompleted();
            });
        });
    };
