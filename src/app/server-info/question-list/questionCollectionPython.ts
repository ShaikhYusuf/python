export interface IQuestion {
  Id: number;
  question: string;
  optionList: string[];
  answer: number;
  codeBlock?: string;
};

export class QuestionCollectionPython {

  get(): IQuestion[] {

    let questionList = [
      {
        "Id": 1,
        "optionList": [
          "3.3",
          "3.5.1",
          "2.4",
          "2.6"
        ],
        "question": "Which of the following version of Python was released in December, 2015 by Python.org?",
        "answer": 1
      },
      {
        "Id": 2,
        "optionList": [
          ".python",
          ".pe",
          ".py",
          ".pi"
        ],
        "question": "Python files are saved with the extension as ?",
        "answer": 2
      },
      {
        "Id": 3,
        "optionList": [
          "PGUI",
          "Pyshell",
          "IDLE",
          "PythonSh"
        ],
        "question": "What is the name of the GUI that comes in-built as an interactive shell with Python?",
        "answer": 2
      },
      {
        "Id": 4,
        "optionList": [
          "Indigenous Development Lab",
          "Integrated Development Environment",
          "Integrated Developers Local Environment",
          "Indie Developers Environment"
        ],
        "question": "IDLE stands for ? ?",
        "answer": 1
      },
      {
        "Id": 5,
        "optionList": [
          "print",
          "display",
          "run",
          "output"
        ],
        "question": "The function to display a specified message on the screen is ? ?",
        "answer": 0
      },
      {
        "Id": 6,
        "optionList": [
          "==",
          "===",
          ">>>",
          "="
        ],
        "question": "Which of the following is an assignment operator in Python?",
        "answer": 2
      },
      {
        "Id": 7,
        "optionList": [
          "x = y: y = 33",
          "x = y = z = 33",
          "x = z; y = z; x = 33;",
          "x & y & z = 33"
        ],
        "question": "Which of the following is used to initialize multiple variables with a common value?",
        "answer": 1
      },
      {
        "Id": 8,
        "optionList": [
          "{",
          "%",
          "*",
          "#"
        ],
        "question": "Comments in Python begin with ??",
        "answer": 2
      },
      {
        "Id": 9,
        "optionList": [
          "user",
          "enter",
          "input",
          "value"
        ],
        "question": "A user-specified value can be assigned to a variable with this function ?",
        "answer": 2
      },
      {
        "Id": 10,
        "optionList": [
          "Floating Decimal",
          "Text String",
          "Boolean Value",
          "Integer"
        ],
        "question": "User input is read as ?",
        "answer": 1
      },
      {
        "Id": 11,
        "optionList": [
          "\\t",
          "\\n",
          "\\s",
          "\\r"
        ],
        "question": "Output displayed by the print function will add this invisible character at the end of the line by default ?",
        "answer": 1
      },
      {
        "Id": 12,
        "optionList": [
          "Single Space",
          "Double Space",
          "A new Line",
          "Double Lines"
        ],
        "question": "Multiple values specified in parentheses to print function will display each value separated with this by default ?",
        "answer": 0
      },
      {
        "Id": 13,
        "optionList": [
          "sep is !",
          "separate = !",
          "sep >> '!'",
          "sep = '!'"
        ],
        "question": "Which of the following will provide an ! character as alternative separator for the print function?",
        "answer": 2
      },
      {
        "Id": 14,
        "optionList": [
          "end to *",
          "end as *",
          "end = '*'",
          "ending = '*'"
        ],
        "question": "Which of the following will provide a * character as alternative line ending for the print function?",
        "answer": 2
      },
      {
        "Id": 15,
        "optionList": [
          "Semantic error",
          "Syntax error",
          "Runtime error",
          "All type of errors"
        ],
        "question": "For which type of error does the interpreter halts and reports the error but does not execute the program?",
        "answer": 1
      },
      {
        "Id": 16,
        "optionList": [
          "Semantic error",
          "Syntax error",
          "Runtime error",
          "All type of errors"
        ],
        "question": "For which type of error does the interpreter runs the program but halts at error and reports the error as an \"Exception\"?",
        "answer": 2
      },
      {
        "Id": 17,
        "optionList": [
          "Semantic error",
          "Syntax error",
          "Runtime error",
          "All type of errors"
        ],
        "question": "For which type of error does the interpreter runs the program and does not report an error?",
        "answer": 0
      },
      {
        "Id": 18,
        "optionList": [
          "2.0",
          "2",
          "18",
          "18.0"
        ],
        "question": "What will be the output after the following statements?",
        "codeBlock": "x = 6\ny = 3\nprint(x / y)",
        "answer": 0
      },
      {
        "Id": 19,
        "optionList": [
          "Float",
          "String",
          "List",
          "Integer"
        ],
        "question": "What will be the data type of x after the following statement if input entered is 18 ?",
        "codeBlock": "x = input('Enter a number: ')",
        "answer": 1
      },
      {
        "Id": 20,
        "optionList": [
          "Float",
          "String",
          "List",
          "Integer"
        ],
        "question": "What will be the data type of y after the following statements if input entered is 50?",
        "codeBlock": "x = input('Enter a number: ') y = int(x)",
        "answer": 2
      },
      {
        "Id": 21,
        "optionList": [
          "Float",
          "String",
          "List",
          "Integer"
        ],
        "question": "What will be the data type of y after the following statements?",
        "codeBlock": "x = 71 y = float(x)",
        "answer": 0
      },
      {
        "Id": 22,
        "optionList": [
          "All three will have the value of 3",
          "All three will have the value of 100",
          "All three will have the value of 300",
          "x and y will have arbitrary values, while z will have the value of 300"
        ],
        "question": "What will be the value of x, y and z after the following statement?",
        "codeBlock": "x = y = z = 300",
        "answer": 2
      },
      {
        "Id": 23,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "String"
        ],
        "question": "What is the data type of x after the following statement?",
        "codeBlock": "x = [7, 8, 9, 10]",
        "answer": 0
      },
      {
        "Id": 24,
        "optionList": [
          "List",
          "String",
          "Dictionary",
          "Tuple"
        ],
        "question": "What will be the data type of x after the following statement?",
        "codeBlock": "x = (34, 81, 50)",
        "answer": 2
      },
      {
        "Id": 25,
        "optionList": [
          "data()",
          "type()",
          "true()",
          "str()"
        ],
        "question": "Which of the following function can be used to find the data type of a variable?",
        "answer": 1
      },
      {
        "Id": 26,
        "optionList": [
          "List",
          "String",
          "Dictionary",
          "Boolean"
        ],
        "question": "What will be the data type of x after the following statements?",
        "codeBlock": "false = \"This is not true\" x = false",
        "answer": 1
      },
      {
        "Id": 27,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "Set"
        ],
        "question": "Which of the following is immutable (values that cannot be changed)?",
        "answer": 2
      },
      {
        "Id": 28,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "Set"
        ],
        "question": "Which of the following has only unique values?",
        "answer": 2
      },
      {
        "Id": 29,
        "optionList": [
          "Closed loop",
          "One time loop",
          "Infinite loop",
          "Evergreen loop"
        ],
        "question": "What type of loop is this?",
        "codeBlock": "x = 1 while x < 5:     print(x, end='')",
        "answer": 2
      },
      {
        "Id": 30,
        "optionList": [
          "A list",
          "A string",
          "An integer",
          "A function"
        ],
        "question": "What is printvar in the following statements?",
        "codeBlock": "myvar = 5 def printvar() :     print(myvar) printvar()",
        "answer": 2
      },
      {
        "Id": 31,
        "optionList": [
          "List",
          "Module",
          "Dictionary",
          "Tuple"
        ],
        "question": "Which of the following is not a core data structure in Python?",
        "answer": 1
      },
      {
        "Id": 32,
        "optionList": [
          "HELP",
          "save",
          "help()",
          "help"
        ],
        "question": "What do you type to enter the interactive help mode of Python?",
        "answer": 2
      },
      {
        "Id": 33,
        "optionList": [
          "Imports the random module",
          "Imports a random module from a list of modules",
          "Imports the random function",
          "imports the directory named random"
        ],
        "question": "What does the following statement do?",
        "codeBlock": "import random",
        "answer": 0
      },
      {
        "Id": 34,
        "optionList": [
          "[4, 11, 30]",
          "[3, 15, 10]",
          "[1, 5, 7, 4]",
          "[1, 5, 0]"
        ],
        "question": "Which of the following can be a possible output after the following statements?",
        "codeBlock": "from random import * print(sample(range(0,10), 3))",
        "answer": 2
      },
      {
        "Id": 35,
        "optionList": [
          "Displays the Python version",
          "Displays the operating system version",
          "Displays the date",
          "Displays the year"
        ],
        "question": "What does the following statements do?",
        "codeBlock": "import sys print(sys.version)",
        "answer": 0
      },
      {
        "Id": 36,
        "optionList": [
          "4+4",
          "4 + 4",
          "4*2",
          "4**2"
        ],
        "question": "In IDLE shell, the output will be the same for all the following statements except one. Which one?",
        "answer": 2
      },
      {
        "Id": 37,
        "optionList": [
          "Page Down",
          "Page Up",
          "Alt + P",
          "Ctrl + P"
        ],
        "question": "In IDLE shell, what is the keyboard shortcut for the previous command in history on Windows/Linux?",
        "answer": 2
      },
      {
        "Id": 38,
        "optionList": [
          "Page Down",
          "Page Up",
          "Ctrl + N",
          "Alt + N"
        ],
        "question": "In IDLE shell, what is the keyboard shortcut for the next command in history on Windows/Linux?",
        "answer": 2
      },
      {
        "Id": 39,
        "optionList": [
          "Page Down",
          "Page Up",
          "Alt + P",
          "Ctrl + P"
        ],
        "question": "In IDLE shell, what is the keyboard shortcut for the previous command in history on Mac OS X?",
        "answer": 2
      },
      {
        "Id": 40,
        "optionList": [
          "Page Down",
          "Page Up",
          "Ctrl + N",
          "Alt + N"
        ],
        "question": "In IDLE shell, what is the keyboard shortcut for the next command in history on Mac OS X?",
        "answer": 2
      },
      {
        "Id": 41,
        "optionList": [
          "F5",
          "F1",
          "Shift",
          "Alt"
        ],
        "question": "In IDLE file editor, what is the keyboard shortcut for executing the program in shell?",
        "answer": 0
      },
      {
        "Id": 42,
        "optionList": [
          "Not declared",
          "Not defined",
          "Not assigned",
          "Not a variable"
        ],
        "question": "What type of error is shown when you use a variable without assigning an initial value?",
        "answer": 1
      },
      {
        "Id": 43,
        "optionList": [
          "High level",
          "Low level",
          "Top level",
          "Bottom level"
        ],
        "question": "What type of language is Python?",
        "answer": 0
      },
      {
        "Id": 44,
        "optionList": [
          "Python - the reptile",
          "Monty Python",
          "A pet",
          "A company"
        ],
        "question": "Python language was named after?",
        "answer": 1
      },
      {
        "Id": 45,
        "optionList": [
          "Bill Gates",
          "Guido Van Rossum",
          "Jeff Bezos",
          "Larry Page"
        ],
        "question": "Who is the creator of Python?",
        "answer": 1
      },
      {
        "Id": 46,
        "optionList": [
          "Dynamic typing",
          "Static typing",
          "Slow typing",
          "Auto typing"
        ],
        "question": "Which of the following is identified with Python?",
        "answer": 0
      },
      {
        "Id": 47,
        "optionList": [
          "Single quotes",
          "Double quotes",
          "Either single quotes or double quotes",
          "! symbol"
        ],
        "question": "Which of the following is used to enclose strings?",
        "answer": 2
      },
      {
        "Id": 48,
        "optionList": [
          "\\t",
          "\\tab",
          "\\a",
          "\\b"
        ],
        "question": "Which of the following is used to add an invisible tab character to the output?",
        "answer": 0
      },
      {
        "Id": 49,
        "optionList": [
          "2 t 4",
          "2\\t4",
          "2 4",
          "2 tab 4"
        ],
        "question": "What will be the output after the following statement?",
        "codeBlock": "print('2\\\\t4')",
        "answer": 1
      },
      {
        "Id": 50,
        "optionList": [
          "Multiplication",
          "Division",
          "Addition",
          "Subtraction"
        ],
        "question": "In the order of precedence, which of the operation will be completed first in the following statement?",
        "codeBlock": "3 * 6 + 5 - 4 / 2",
        "answer": 0
      },
      {
        "Id": 51,
        "optionList": [
          "Multiplication",
          "Division",
          "Addition",
          "Subtraction"
        ],
        "question": "In the order of precedence, which of the operation will be completed last in the following statement?",
        "codeBlock": "3 * 6 + 5 - 4 / 2",
        "answer": 2
      },
      {
        "Id": 52,
        "optionList": [
          "Multiplication, Division, Subtraction, Addition",
          "Multiplication, Division, Addition, Subtraction",
          "Division, Multiplication, Subtraction, Addition",
          "Division, Multiplication, Addition, Subtraction"
        ],
        "question": "What will be the order of precedence of operations in the following statement?",
        "codeBlock": "10 * 4 - 1 + 8 / 5",
        "answer": 1
      },
      {
        "Id": 53,
        "optionList": [
          "Integer",
          "String",
          "List",
          "Float"
        ],
        "question": "What will be the data type of x after the following statement if input entered is 64?",
        "codeBlock": "x = float(input('Enter a number: '))",
        "answer": 2
      },
      {
        "Id": 54,
        "optionList": [
          "abc",
          "abc123",
          "123abc",
          "abc_123"
        ],
        "question": "Which of the following is not a valid variable name?",
        "answer": 2
      },
      {
        "Id": 55,
        "optionList": [
          "a$1",
          "a1",
          "1a",
          "abc 123"
        ],
        "question": "Which of the following is a valid variable name?",
        "answer": 1
      },
      {
        "Id": 56,
        "optionList": [
          "P = 'python' * int('1')",
          "P = 'python' + 1",
          "P = 'python' + str(1)",
          "P = 'python' * 1"
        ],
        "question": "In IDLE shell, the output will be an error for one of the following statements. Which one?",
        "answer": 1
      },
      {
        "Id": 57,
        "optionList": [
          "3",
          "4",
          "5",
          "6"
        ],
        "question": "How many times will \"Python 3\" be printed after the following statements?",
        "codeBlock": "for i in range(1, 5):     print('Python 3')",
        "answer": 1
      },
      {
        "Id": 58,
        "optionList": [
          "None",
          "No value",
          "Zero",
          "Bool"
        ],
        "question": "What will be the output for a function that does not return any value?",
        "answer": 0
      },
      {
        "Id": 59,
        "optionList": [
          "SyntaxError",
          "TypeError",
          "ValueError",
          "NameError"
        ],
        "question": "What type of error will be shown after the following statement?",
        "codeBlock": "a = b",
        "answer": 2
      },
      {
        "Id": 60,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "Set"
        ],
        "question": "What is the data type of a after the following statement?",
        "codeBlock": "a = {'A', 'B', 'C', 'D'}",
        "answer": 2
      },
      {
        "Id": 61,
        "optionList": [
          "List",
          "Dictionary",
          "Tuple",
          "Set"
        ],
        "question": "What is the data type used to store values in key values pair?",
        "answer": 1
      },
      {
        "Id": 62,
        "optionList": [
          "\"Python\\tis\\tEasy\\n\"",
          "\"Hello, it's very easy to learn Python\"",
          "\"Python\", \"easy\"",
          "\"Python is easy'"
        ],
        "question": "In IDLE shell, which of the following statements gives SyntaxError?",
        "answer": 2
      },
      {
        "Id": 63,
        "optionList": [
          "Parentheses",
          "Exponential",
          "Division",
          "Subtraction"
        ],
        "question": "Which of the following has the highest precedence in an expression?",
        "answer": 0
      },
      {
        "Id": 64,
        "optionList": [
          "regex",
          "regexes",
          "REG",
          "re"
        ],
        "question": "What is the name of Python's built-in module for regular expressions?",
        "answer": 2
      },
      {
        "Id": 65,
        "optionList": [
          "csv",
          "tsc",
          "delimited",
          "pipe"
        ],
        "question": "What is the name of Python's built-in module for delimited files?",
        "answer": 0
      },
      {
        "Id": 66,
        "optionList": [
          "date",
          "time",
          "datetime",
          "dates"
        ],
        "question": "What is the name of Python's built-in module for basic date and time types?",
        "answer": 2
      },
      {
        "Id": 67,
        "optionList": [
          "mailserver",
          "email",
          "message",
          "mail"
        ],
        "question": "What is the name of Python's built-in module for email related tasks?",
        "answer": 1
      },
      {
        "Id": 68,
        "optionList": [
          "getpass",
          "password",
          "login",
          "readpass"
        ],
        "question": "What is the name of Python's built-in module for reading passwords?",
        "answer": 0
      },
      {
        "Id": 69,
        "optionList": [
          "getip",
          "ipman",
          "ip",
          "ipaddress"
        ],
        "question": "What is the name of Python's built-in module for IPv4/IPv6 manipulation?",
        "answer": 2
      },
      {
        "Id": 70,
        "optionList": [
          "json",
          "jcode",
          "jsonencode",
          "jsoncode"
        ],
        "question": "What is the name of Python's built-in module for encoding/decoding JSON format?",
        "answer": 0
      },
      {
        "Id": 71,
        "optionList": [
          "string",
          "keyword",
          "stringtest",
          "keytest"
        ],
        "question": "What is the name of Python's built-in module for Python keywords?",
        "answer": 1
      },
      {
        "Id": 72,
        "optionList": [
          "maths",
          "mathematics",
          "math",
          "mathfunc"
        ],
        "question": "What is the name of Python's built-in module for mathematical functions?",
        "answer": 2
      },
      {
        "Id": 73,
        "optionList": [
          "windows",
          "liunx",
          "operatingsystem",
          "os"
        ],
        "question": "What is the name of Python's built-in module for operating system interfaces?",
        "answer": 2
      },
      {
        "Id": 74,
        "optionList": [
          "pprint",
          "print",
          "prettyprint",
          "printp"
        ],
        "question": "What is the name of Python's built-in module for data pretty printer?",
        "answer": 0
      },
      {
        "Id": 75,
        "optionList": [
          "psrandom",
          "random",
          "psuedo",
          "randomnum"
        ],
        "question": "What is the name of Python's built-in module for generating pseudo-random numbers?",
        "answer": 1
      },
      {
        "Id": 76,
        "optionList": [
          "scheduler",
          "eventsched",
          "sched",
          "schedule"
        ],
        "question": "What is the name of Python's built-in module for general purpose event scheduler?",
        "answer": 2
      },
      {
        "Id": 77,
        "optionList": [
          "shutil",
          "fileutil",
          "futility",
          "fileop"
        ],
        "question": "What is the name of Python's built-in module for high level file operations?",
        "answer": 0
      },
      {
        "Id": 78,
        "optionList": [
          "net",
          "socket",
          "webking",
          "webworking"
        ],
        "question": "What is the name of Python's built-in module for low level networking interface?",
        "answer": 1
      },
      {
        "Id": 79,
        "optionList": [
          "SQL",
          "sqldb",
          "dbase",
          "sqlite3"
        ],
        "question": "What is the name of Python's built-in module for SQLite databases?",
        "answer": 2
      },
      {
        "Id": 80,
        "optionList": [
          "ssl",
          "swrap",
          "tlsssl",
          "sslobj"
        ],
        "question": "What is the name of Python's built-in module for TLS/SSL wrapper for socket objects?",
        "answer": 0
      },
      {
        "Id": 81,
        "optionList": [
          "mathstats",
          "statistics",
          "statmath",
          "statfunc"
        ],
        "question": "What is the name of Python's built-in module for mathematical statistics functions?",
        "answer": 1
      },
      {
        "Id": 82,
        "optionList": [
          "sub",
          "mansub",
          "submng",
          "subprocess"
        ],
        "question": "What is the name of Python's built-in module for subprocess management?",
        "answer": 2
      },
      {
        "Id": 83,
        "optionList": [
          "config",
          "pysys",
          "sysconfig",
          "pycon"
        ],
        "question": "What is the name of Python's built-in module for Python's configuration information?",
        "answer": 2
      },
      {
        "Id": 84,
        "optionList": [
          "telnetlib",
          "tellib",
          "tnet",
          "telnet"
        ],
        "question": "What is the name of Python's built-in module for telnet client class?",
        "answer": 0
      },
      {
        "Id": 85,
        "optionList": [
          "temp",
          "tempdir",
          "temporary",
          "tempfile"
        ],
        "question": "What is the name of Python's built-in module for generating temporary files and directories?",
        "answer": 2
      },
      {
        "Id": 86,
        "optionList": [
          "thread",
          "threadall",
          "threading",
          "thrpar"
        ],
        "question": "What is the name of Python's built-in module for thread based parallelism?",
        "answer": 2
      },
      {
        "Id": 87,
        "optionList": [
          "timely",
          "time",
          "primetime",
          "mytime"
        ],
        "question": "What is the name of Python's built-in module for time access and conversions?",
        "answer": 1
      },
      {
        "Id": 88,
        "optionList": [
          "calendars",
          "calendar",
          "yearcal",
          "calc"
        ],
        "question": "What is the name of Python's built-in module for working with calendars?",
        "answer": 1
      },
      {
        "Id": 89,
        "optionList": [
          "timeit",
          "selftime",
          "codetime",
          "timer"
        ],
        "question": "What is the name of Python's built-in module for measuring execution time of code snippets?",
        "answer": 0
      },
      {
        "Id": 90,
        "optionList": [
          "tkgui",
          "guitk",
          "intertk",
          "tkinter"
        ],
        "question": "What is the name of Python's built-in module for interface to Tcl/Tk for graphical user interfaces?",
        "answer": 2
      },
      {
        "Id": 91,
        "optionList": [
          "torque",
          "tedu",
          "turtle",
          "moveturtle"
        ],
        "question": "What is the name of Python's built-in module for simple educational graphical applications?",
        "answer": 2
      },
      {
        "Id": 92,
        "optionList": [
          "urls",
          "urllib",
          "URL",
          "httpurl"
        ],
        "question": "What is the name of Python's built-in module for url handling?",
        "answer": 1
      },
      {
        "Id": 93,
        "optionList": [
          "wav",
          "WAVE",
          "WAV",
          "wave"
        ],
        "question": "What is the name of Python's built-in module for interface to WAV sound format?",
        "answer": 2
      },
      {
        "Id": 94,
        "optionList": [
          "browser",
          "browse",
          "webrowser",
          "webbrowser"
        ],
        "question": "What is the name of Python's built-in module for web browser controlller?",
        "answer": 2
      },
      {
        "Id": 95,
        "optionList": [
          "xml",
          "XML",
          "allxml",
          "onlyxml"
        ],
        "question": "What is the name of Python's built-in module for xml processing?",
        "answer": 0
      },
      {
        "Id": 96,
        "optionList": [
          "readzip",
          "zipfile",
          "writezip",
          "rwzip"
        ],
        "question": "What is the name of Python's built-in module for reading and writing ZIP archive files?",
        "answer": 1
      },
      {
        "Id": 97,
        "optionList": [
          "pcgi",
          "pycgi",
          "cgi",
          "cgipy"
        ],
        "question": "What is the name of Python's built-in module for running Python scripts via CGI?",
        "answer": 2
      },
      {
        "Id": 98,
        "optionList": [
          "complexmath",
          "cmath",
          "mathc",
          "mathplex"
        ],
        "question": "What is the name of Python's built-in module for mathematical functions for complex numbers?",
        "answer": 1
      },
      {
        "Id": 99,
        "optionList": [
          "color",
          "colors",
          "colours",
          "colorsys"
        ],
        "question": "What is the name of Python's built-in module for conversions between color systems?",
        "answer": 2
      },
      {
        "Id": 100,
        "optionList": [
          "copyd",
          "copyme",
          "copy",
          "copys"
        ],
        "question": "What is the name of Python's built-in module for shallow and deep copy operations?",
        "answer": 2
      },
      {
        "Id": 101,
        "optionList": [
          "filecmp",
          "cmpfile",
          "compare",
          "filecompare"
        ],
        "question": "What is the name of Python's built-in module for comparing files?",
        "answer": 0
      },
      {
        "Id": 102,
        "optionList": [
          "ftp",
          "ftplib",
          "FTP",
          "pftp"
        ],
        "question": "What is the name of Python's built-in module for FTP protocol client?",
        "answer": 1
      },
      {
        "Id": 103,
        "optionList": [
          "upattern",
          "pathpat",
          "upath",
          "glob"
        ],
        "question": "What is the name of Python's built-in module for unix style pathname pattern expansion?",
        "answer": 2
      },
      {
        "Id": 104,
        "optionList": [
          "hyper",
          "xml",
          "html",
          "uml"
        ],
        "question": "What is the name of Python's built-in module for html manipulation?",
        "answer": 2
      },
      {
        "Id": 105,
        "optionList": [
          "print(\"Hello World!\")",
          "print \"Hello World!\"",
          "print(\"Hello World!\")!",
          "print(\"Hello World!\"):"
        ],
        "question": "What is the famous one-line Hello World program of Python?",
        "answer": 0
      },
      {
        "Id": 106,
        "optionList": [
          "Three braces {{{ }}}",
          "Three Colons ::: :::",
          "Three hashes ### ###",
          "Three Quotes ''' '''"
        ],
        "question": "What is used for multi-line strings in Python?",
        "answer": 2
      },
      {
        "Id": 107,
        "optionList": [
          "Addition",
          "Multiplication",
          "Division",
          "Deletion"
        ],
        "question": "Which of the following operations is not possible while manipulating lists?",
        "answer": 2
      },
      {
        "Id": 108,
        "optionList": [
          "Braces",
          "Indentation",
          "Commas",
          "Expressions"
        ],
        "question": "Which of the following is used by interpreter to identify code blocks?",
        "answer": 1
      },
      {
        "Id": 109,
        "optionList": [
          "45*2",
          "eval(\"90\")",
          "90",
          "0"
        ],
        "question": "What will be the output after the following statements if input entered is 45*2?",
        "codeBlock": "x = input(\"Enter an expression: \") print(eval(x))",
        "answer": 2
      },
      {
        "Id": 110,
        "optionList": [
          "String",
          "Integer",
          "List",
          "Float"
        ],
        "question": "What will be the data type of the output after the following statements?",
        "codeBlock": "import time print(time.time())",
        "answer": 2
      },
      {
        "Id": 111,
        "optionList": [
          "2016",
          "3:40",
          "Mon",
          "04"
        ],
        "question": "What is likely to be the output after the following statements?",
        "codeBlock": "import time y = time.asctime() print(y[:3])",
        "answer": 2
      },
      {
        "Id": 112,
        "optionList": [
          "undefined",
          "Null",
          "Nan",
          "None"
        ],
        "question": "What is the value of the NoneType data type?",
        "answer": 2
      },
      {
        "Id": 113,
        "optionList": [
          "TypeError",
          "String",
          "Tuple",
          "List"
        ],
        "question": "What will be the data type of z after the following statements?",
        "codeBlock": "x =  [1, 2, 3, 4] y = tuple(x) z = list(y)",
        "answer": 2
      },
      {
        "Id": 114,
        "optionList": [
          "A comment",
          "Python String",
          "Shebang line",
          "Python Variable"
        ],
        "question": "What is the first line of the following statements on Windows?",
        "codeBlock": "#! python3 x = 'Python 3'",
        "answer": 2
      },
      {
        "Id": 115,
        "optionList": [
          "Ping http://google.com",
          "Display http://google.com in the shell",
          "Download http://google.com as a text file",
          "Launch a browser window to http://google.com"
        ],
        "question": "What do the following statements do?",
        "codeBlock": "import webbrowser\nwebbrowser.open('http://google.com')",
        "answer": 2
      }
    ];

    return questionList;
  }
}