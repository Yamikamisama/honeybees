//
//  ViewController.swift
//  honeybees
//
//  Created by Steph Reaves on 10/23/15.
//  Copyright © 2015 Steph Reaves. All rights reserved.
//

import UIKit
import PebbleKit


var todoItem = [String]()
var destination = [String]()



class ViewController: UIViewController, UITableViewDelegate {

    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return todoItem.count
    }
    
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell{
        let cell = UITableViewCell(style: UITableViewCellStyle.Value1, reuseIdentifier: "cell")
        
        cell.textLabel?.text = destination[indexPath.row]
        cell.detailTextLabel?.text = todoItem[indexPath.row]
        
        return cell
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        if NSUserDefaults.standardUserDefaults().objectForKey("todoItem") != nil {
            todoItem = NSUserDefaults.standardUserDefaults().objectForKey("todoItem") as! [String]
        }
        if NSUserDefaults.standardUserDefaults().objectForKey("todoDestination") != nil {
            destination = NSUserDefaults.standardUserDefaults().objectForKey("todoDestination") as! [String]
        }
        // Do any additional setup after loading the view, typically from a nib.
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

