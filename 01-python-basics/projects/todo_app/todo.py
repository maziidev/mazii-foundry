import argparse
import json

TASK_FILE = "../todo_app/data/tasks.json"

def load_tasks():
    try:
        with open(TASK_FILE, "r") as file:
            data = json.load(file)
            return data
    except (FileNotFoundError, json.JSONDecodeError):
        print("File not found or corrupted")
        return []

def save_tasks(tasks):
    try:
        with open(TASK_FILE, "w") as file:
            json.dump(tasks, file, indent=4)
    except IOError:
        print("Error saving todo")

def add_task(title):
    data = load_tasks()

    task_id = len(data) + 1
    tasks = {
        "id": task_id,
        "title": title,
        "completed": False
    }
    data.append(tasks)
    # save
    save_tasks(data)

    print(f"Task {task_id} added: {tasks['title']}")

def list_tasks():
    data = load_tasks()
    if data == []:
        print("No tasks found")
        return

    for task in data:
        symbol = "✓" if task["completed"] else " "
        print(f"[{symbol}]-{task['id']}. {task['title']}")

def completed_task(task_id):
    data = load_tasks()

    for task in data:
        if task["id"] == task_id:
            task["completed"] = True
            save_tasks(data)
            print(f"Task {task_id} marked as complete")
            return

    print("Task not found")

def delete_task(task_id):
    data = load_tasks()

    for task in data:
        if task["id"] == task_id:
            data.remove(task)
            save_tasks(data)
            print(f"Task {task_id} deleted")
            return
    print("Tasks does not exist")


def main():
    parser = argparse.ArgumentParser(description="TODO APP")

    subparsers = parser.add_subparsers(dest="command")

    add_parser = subparsers.add_parser("add")
    add_parser.add_argument("title", type=str)

    subparsers.add_parser("list")

    complete_parser = subparsers.add_parser("complete")
    complete_parser.add_argument("id", type=int)

    delete_parser = subparsers.add_parser("delete")
    delete_parser.add_argument("id", type=int)

    args = parser.parse_args()

    if args.command == "add":
        add_task(args.title)
    elif args.command == "list":
        list_tasks()
    elif args.command == "complete":
        completed_task(args.id)
    elif args.command == "delete":
        delete_task(args.id)

if __name__ == "__main__":
    main()