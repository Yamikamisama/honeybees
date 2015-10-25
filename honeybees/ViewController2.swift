//
//  ViewController2.swift
//  honeybees
//
//  Created by Michael Angelo DeCarlo on 10/24/15.
//  Copyright © 2015 Steph Reaves. All rights reserved.
//

import UIKit

class ViewController2: UIViewController {
    
    
    
    @IBOutlet weak var todoInput: UITextField!
    @IBOutlet weak var destinationIn: UITextField!
    
    @IBAction func submitPressed(sender: UIButton) {
        todoItem.append(todoInput.text!)
        destination.append(destinationIn.text!)

        
        NSUserDefaults.standardUserDefaults().setObject(todoItem, forKey: "todoItem")
        NSUserDefaults.standardUserDefaults().setObject(destination, forKey: "todoDestination")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
