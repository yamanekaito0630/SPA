<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * @return Collection
     */
    public function index(): Collection
    {
        return Task::all();
    }

    /**
     * @param Task $task
     * @return Task
     */
    public function show(Task $task): Task
    {
        return $task;
    }

    /**
     * @param Request $request
     * @return Model|Builder
     */
    public function store(Request $request): Model|Builder
    {
        return Task::query()->create($request->all());
    }

    /**
     * @param Request $request
     * @param Task $task
     * @return Task
     */
    public function update(Request $request, Task $task): Task
    {
        $task->update($request->all());

        return $task;
    }

    /**
     * @param Task $task
     * @return Task
     */
    public function destroy(Task $task): Task
    {
        $task->delete();

        return $task;
    }
}
